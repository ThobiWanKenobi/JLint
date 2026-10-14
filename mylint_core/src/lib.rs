use oxc_allocator::Allocator;
use oxc_parser::{Parser, ParserReturn};
use oxc_span::SourceType;

pub fn lint_source(source_text: &str, source_type: SourceType) -> Vec<String> {
    let allocator = Allocator::default();

    let ParserReturn {
        program,
        diagnostics,
        fatal_error,
        ..
    } = Parser::new(&allocator, &source_text, source_type).parse();

    let vec = vec!();

    if fatal_error {
        return vec;
    }

    if !diagnostics.is_empty() {
        return vec;
    }

    vec
}