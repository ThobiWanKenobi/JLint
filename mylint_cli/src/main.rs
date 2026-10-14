use std::{fs, env, path::Path};

use mylint_core::lint_source;
use oxc_span::SourceType;

fn main() -> Result<(), String> {
    let args: Vec<String> = env::args().collect();

    if args.len() < 2 {
        return Err("Filepath is not specified".to_string());
    }

    let name = &args[1];

    let path = Path::new(&args[1]); // relative to the directory the program is running from

    let source_text = fs::read_to_string(path).map_err(|_| format!("Missing '{name}'"))?;
    let source_type = SourceType::from_path(path).unwrap();
    
    let lint_diagnostics = lint_source(&source_text, source_type);

    println!("{:#?}", lint_diagnostics);

    Ok(())
}
