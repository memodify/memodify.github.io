// @ts-check
import matter from "gray-matter";

//
// inspired by https://www.josephrex.me/frontmatter-with-nextjs-and-mdx/
//

/**
 * @param {{path: string, attrName?: string}} props
 */
export default function remarkFrontmatter(props) {
  // const importPath = "../components/Post";
  const importPath = props.path;
  const attrName = props.attrName ?? "frontmatter";

  /**
   * @param {any} tree
   * @param {any} file
   */
  return function frontmatterPlugin(tree, file) {
    const { data } = matter(file.value);

    // Remove frontmatter after converting it into JS object
    if (tree.children[0].type === "thematicBreak") {
      const firstHeadingIndex = tree.children.findIndex(
        /** @param {any} t */
        (t) => t.type === "heading"
      );
      if (firstHeadingIndex !== -1) {
        tree.children.splice(0, firstHeadingIndex + 1);
      }
    }

    const fmprops = Object.keys(data).map((key) => toProperty(key, data[key]));

    tree.children = [
      mdxjsEsmImportDeclaration(importPath),
      mdxJsxFlowElementMdxFrontMatterProvider(attrName, fmprops, tree.children),
    ];
  };
}

/**
 * @param {string} attrname
 * @param {object} props properties as frontmatter
 * @param {*} children
 */
function mdxJsxFlowElementMdxFrontMatterProvider(attrname, props, children) {
  return {
    type: "mdxJsxFlowElement",
    name: "MdxFrontmatterProvider",
    value: `<MdxFrontmatterProvider frontmatter={{...}} />`, // cosmetic: functionally ignored
    data: {
      _mdxExplicitJsx: true,
    },
    children: children,
    attributes: [
      {
        name: attrname,
        type: "mdxJsxAttribute",
        value: {
          data: {
            estree: {
              type: "Program",
              sourceType: "module",
              body: [
                {
                  expression: {
                    type: "ObjectExpression",
                    properties: props,
                  },
                  type: "ExpressionStatement",
                },
              ],
            },
          },
          type: "mdxJsxAttributeValueExpression",
          value: JSON.stringify(props), // cosmetic.
        },
      },
    ],
  };
}

/**
 * @param {string} importPath
 */
function mdxjsEsmImportDeclaration(importPath) {
  return {
    type: "mdxjsEsm",
    value: `import MdxFrontmatterProvider from ${importPath}`,
    data: {
      estree: {
        type: "Program",
        body: [
          {
            type: "ImportDeclaration",
            specifiers: [
              {
                type: "ImportDefaultSpecifier",
                local: {
                  type: "Identifier",
                  name: "MdxFrontmatterProvider",
                },
              },
            ],
            source: {
              type: "Literal",
              value: importPath,
              raw: JSON.stringify(importPath),
            },
          },
        ],
        sourceType: "module",
      },
    },
  };
}

/**
 * @param {string} keyName
 * @param {number | string} value
 */
function toProperty(keyName, value) {
  return {
    computed: false,
    key: { type: "Identifier", name: keyName },
    kind: "init",
    method: false,
    shorthand: false,
    type: "Property",
    value: {
      raw: JSON.stringify(value),
      type: "Literal",
      value: value,
    },
  };
}
