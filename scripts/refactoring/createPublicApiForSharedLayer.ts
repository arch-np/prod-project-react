import { Project } from 'ts-morph';
import path from 'path';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();
const sharedLayerDirectory = project.getDirectory(
    path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui'),
);
const componentDirs = sharedLayerDirectory?.getDirectories();

function isAbsolute(value: string) {
    const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages'];
    return layers.some(layer => value.startsWith(layer));
}

componentDirs?.forEach(dir => {
    // console.log(dir.getBaseName());
    const indexFilePath = dir.getPath() + '/index.ts';
    const indexFile = dir.getSourceFile(indexFilePath);
    // console.log(indexFile?.getBaseName());
    if (!indexFile) {
        const sourceCode = `export * from './${dir.getBaseName()}'`;
        const file = dir.createSourceFile(
            indexFilePath,
            sourceCode,
            { overwrite: true },
        );
        file.save();
    }
});

files.forEach(sourceFile => {
    const importDeclarations = sourceFile.getImportDeclarations();

    importDeclarations.forEach(importDeclaration => {
        const value = importDeclaration.getModuleSpecifierValue();
        const valueWithoutAlias = value.replace('@/', '');

        const segments = valueWithoutAlias.split('/');

        const isSharedLayer = segments?.[0] === 'shared';
        const isUiLayer = segments?.[1] === 'ui';

        if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUiLayer) {
            const result = valueWithoutAlias.split('/').slice(0, 3).join('/');
            importDeclaration.setModuleSpecifier(`@/${result}`);
        }
    });
});

project.save();
