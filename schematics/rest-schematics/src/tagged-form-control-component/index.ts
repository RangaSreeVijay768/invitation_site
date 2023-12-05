import {
    apply, chain, filter, MergeStrategy, mergeWith, move, Rule, SchematicContext, template, Tree, url
} from '@angular-devkit/schematics';
import {basename, normalize, strings} from "@angular-devkit/core";
import {dirname} from "path";


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function taggedFormComponent(_options: any): Rule {
    return (_tree: Tree, _context: SchematicContext) => {
        _options.name = basename(_options.name);
        _options.path = normalize('/' + dirname((_options.path + '/' + _options.name)));

        const templateSource = apply(
            url('./files'), [
                template({
                    ..._options,
                    classify: strings.classify,
                    dasherize: strings.dasherize,
                    underscore: strings.underscore
                }),
                filter(path => {
                    console.log(path);
                    return path.indexOf('tag-input') !== -1
                        ;
                }),
                move(_options.path),
            ],
        );

        console.log(templateSource);

        return chain([
            // externalSchematic('@schematics/angular', 'component', _options),
            mergeWith(templateSource, MergeStrategy.Overwrite),
        ]);
    };
}
