import eslint from "@eslint/js";
import next from "@next/eslint-plugin-next";
import eslintConfigPrettier from "eslint-config-prettier";
export default [
  eslint.configs.recommended,
  eslintConfigPrettier,
  {
    plugins :{
      "@next/next": next,
    }
    rules: {
      ...next.configs.recommended.rules,
    },
  }
]
