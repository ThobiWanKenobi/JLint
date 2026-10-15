use std::{env, fs, path::{Path, PathBuf}};

use mylint_core::lint_source;
use oxc_span::SourceType;

fn main() -> Result<(), String> {
    let args: Vec<String> = env::args().collect();

    if args.len() < 2 {
        return Err("Filepath is not specified".to_string());
    }

    let (collected, errors) = collect_files(&args[1..].to_vec());

    for entry in collected {
        println!("{:#?}: ok", entry);
    }

    for entry in errors {
        println!("{:#?}: err", entry);
    }

    println!("Linted {} files.", args.len() - 1);

    let name = &args[1];

    let path = Path::new(&args[1]); // relative to the directory the program is running from

    let source_text = fs::read_to_string(path).map_err(|_| format!("Missing '{name}'"))?;
    let source_type = SourceType::from_path(path).unwrap();
    
    let lint_diagnostics = lint_source(&source_text, source_type);

    println!("{:#?}", lint_diagnostics);

    Ok(())
}

fn collect_files(args: &Vec<String>) -> (Vec<PathBuf>, Vec<String> /* errors */) {
    let mut collected = Vec::new();
    let mut errors = Vec::new();

    for path in args {
        let attr_result = fs::metadata(path);

        match attr_result {
            Ok(attr) =>
                if attr.is_file() {
                    collected.push(PathBuf::from(path));
                }
            Err(_) => errors.push(String::from(path)),
        };
    }

    (collected, errors)
}