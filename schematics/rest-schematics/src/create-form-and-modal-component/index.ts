import {chain, Rule, schematic, SchematicContext, Tree} from '@angular-devkit/schematics';
import {basename, normalize} from "@angular-devkit/core";
import {dirname} from "path";


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function createFormAndModalComponent(_options: any): Rule {
    return (_tree: Tree, _context: SchematicContext) => {
        _options.name = basename(_options.name);
        _options.path = normalize('/' + dirname((_options.path + '/' + _options.name)));

        const form_component_options = Object.assign({}, _options);

        const form_component_modal_options = Object.assign({}, _options);
        form_component_modal_options.name = form_component_modal_options.name + '-modal';
        form_component_modal_options.path =
            normalize('/' + dirname((form_component_modal_options.path + '/' + form_component_modal_options.name)));

        const form_component_modal_content_options = Object.assign({}, _options);
        form_component_modal_content_options.name = form_component_modal_content_options.name + '-modal-content';
        form_component_modal_content_options.path =
            form_component_modal_options.path +
            normalize('/' + form_component_modal_options.name );

        console.log(form_component_options, form_component_modal_options, form_component_modal_content_options);

        return chain([
            schematic('form-component', form_component_options),
            schematic('modal-component', form_component_modal_options),
            schematic('modal-content-component', form_component_modal_content_options)
        ]);
    };
}
