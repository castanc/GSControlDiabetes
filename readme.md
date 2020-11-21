### install google script types
npm i -S @types/google-apps-script

### add tsconfig.json
{ 
    "compilerOptions": {
        "allowJs": true,
        "checkJs": true,
        "types": ["google-apps-script"],
        "lib": ["esnext"],
        "experimentalDecorators": true
      },
}    


