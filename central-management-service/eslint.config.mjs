// @ts-check
import eslint from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
    {
        ignores: ["eslint.config.mjs", "./src/shared/prisma/generated"],
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    eslintPluginPrettierRecommended,
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.jest,
            },
            sourceType: "commonjs",
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-floating-promises": "warn",
            "@typescript-eslint/no-unsafe-argument": "off",
            "@typescript-eslint/no-unsafe-call": "off",
            "@typescript-eslint/no-unsafe-assignment": "off",
            "@typescript-eslint/no-unsafe-member-access": "off",
            "@typescript-eslint/no-redundant-type-constituents": "off",
            "no-restricted-imports": [
                "error",
                {
                    patterns: [
                        {
                            group: ["@/shared/**/*.*", "!@/shared/**/index.ts"],
                            message:
                                "Use index.ts to import from the shared module.",
                        },
                        {
                            group: ["@/api/**/*.*", "!@/api/**/index.ts"],
                            message:
                                "Use index.ts to import from the api module.",
                        },
                    ],
                },
            ],
        },
    },
);
