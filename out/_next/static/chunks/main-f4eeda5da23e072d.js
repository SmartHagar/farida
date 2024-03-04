on", "Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "DecimalLiteral", "PrivateName"]
        });
        return validator;
      }()
    },
    value: {
      validate: (0, _utils.assertNodeType)("Expression", "PatternLike")
    },
    shorthand: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("boolean"), Object.assign(function (node, key, val) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;
        if (val && node.computed) {
          throw new TypeError("Property shorthand of ObjectProperty cannot be true if computed is true");
        }
      }, {
        type: "boolean"
      }), function (node, key, val) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;
        if (val && !(0, _is.default)("Identifier", node.key)) {
          throw new TypeError("Property shorthand of ObjectProperty cannot be true if key is not an Identifier");
        }
      }),
      default: false
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    }
  },
  visitor: ["key", "value", "decorators"],
  aliases: ["UserWhitespacable", "Property", "ObjectMember"],
  validate: function () {
    const pattern = (0, _utils.assertNodeType)("Identifier", "Pattern", "TSAsExpression", "TSSatisfiesExpression", "TSNonNullExpression", "TSTypeAssertion");
    const expression = (0, _utils.assertNodeType)("Expression");
    return function (parent, key, node) {
      if (!process.env.BABEL_TYPES_8_BREAKING) return;
      const validator = (0, _is.default)("ObjectPattern", parent) ? pattern : expression;
      validator(node, "value", node.value);
    };
  }()
});
defineType("RestElement", {
  visitor: ["argument", "typeAnnotation"],
  builder: ["argument"],
  aliases: ["LVal", "PatternLike"],
  deprecatedAlias: "RestProperty",
  fields: Object.assign({}, patternLikeCommon(), {
    argument: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertNodeType)("LVal") : (0, _utils.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern", "MemberExpression", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression")
    }
  }),
  validate(parent, key) {
    if (!process.env.BABEL_TYPES_8_BREAKING) return;
    const match = /(\w+)\[(\d+)\]/.exec(key);
    if (!match) throw new Error("Internal Babel error: malformed key.");
    const [, listKey, index] = match;
    if (parent[listKey].length > +index + 1) {
      throw new TypeError(`RestElement must be last element of ${listKey}`);
    }
  }
});
defineType("ReturnStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    }
  }
});
defineType("SequenceExpression", {
  visitor: ["expressions"],
  fields: {
    expressions: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression")))
    }
  },
  aliases: ["Expression"]
});
defineType("ParenthesizedExpression", {
  visitor: ["expression"],
  aliases: ["Expression", "ExpressionWrapper"],
  fields: {
    expression: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
defineType("SwitchCase", {
  visitor: ["test", "consequent"],
  fields: {
    test: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    },
    consequent: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Statement")))
    }
  }
});
defineType("SwitchStatement", {
  visitor: ["discriminant", "cases"],
  aliases: ["Statement", "BlockParent", "Scopable"],
  fields: {
    discriminant: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    cases: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("SwitchCase")))
    }
  }
});
defineType("ThisExpression", {
  aliases: ["Expression"]
});
defineType("ThrowStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
defineType("TryStatement", {
  visitor: ["block", "handler", "finalizer"],
  aliases: ["Statement"],
  fields: {
    block: {
      validate: (0, _utils.chain)((0, _utils.assertNodeType)("BlockStatement"), Object.assign(function (node) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;
        if (!node.handler && !node.finalizer) {
          throw new TypeError("TryStatement expects either a handler or finalizer, or both");
        }
      }, {
        oneOfNodeTypes: ["BlockStatement"]
      }))
    },
    handler: {
      optional: true,
      validate: (0, _utils.assertNodeType)("CatchClause")
    },
    finalizer: {
      optional: true,
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  }
});
defineType("UnaryExpression", {
  builder: ["operator", "argument", "prefix"],
  fields: {
    prefix: {
      default: true
    },
    argument: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    operator: {
      validate: (0, _utils.assertOneOf)(..._index.UNARY_OPERATORS)
    }
  },
  visitor: ["argument"],
  aliases: ["UnaryLike", "Expression"]
});
defineType("UpdateExpression", {
  builder: ["operator", "argument", "prefix"],
  fields: {
    prefix: {
      default: false
    },
    argument: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertNodeType)("Expression") : (0, _utils.assertNodeType)("Identifier", "MemberExpression")
    },
    operator: {
      validate: (0, _utils.assertOneOf)(..._index.UPDATE_OPERATORS)
    }
  },
  visitor: ["argument"],
  aliases: ["Expression"]
});
defineType("VariableDeclaration", {
  builder: ["kind", "declarations"],
  visitor: ["declarations"],
  aliases: ["Statement", "Declaration"],
  fields: {
    declare: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    kind: {
      validate: (0, _utils.assertOneOf)("var", "let", "const", "using", "await using")
    },
    declarations: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("VariableDeclarator")))
    }
  },
  validate(parent, key, node) {
    if (!process.env.BABEL_TYPES_8_BREAKING) return;
    if (!(0, _is.default)("ForXStatement", parent, {
      left: node
    })) return;
    if (node.declarations.length !== 1) {
      throw new TypeError(`Exactly one VariableDeclarator is required in the VariableDeclaration of a ${parent.type}`);
    }
  }
});
defineType("VariableDeclarator", {
  visitor: ["id", "init"],
  fields: {
    id: {
      validate: function () {
        if (!process.env.BABEL_TYPES_8_BREAKING) {
          return (0, _utils.assertNodeType)("LVal");
        }
        const normal = (0, _utils.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern");
        const without = (0, _utils.assertNodeType)("Identifier");
        return function (node, key, val) {
          const validator = node.init ? normal : without;
          validator(node, key, val);
        };
      }()
    },
    definite: {
      optional: true,
      validate: (0, _utils.assertValueType)("boolean")
    },
    init: {
      optional: true,
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
defineType("WhileStatement", {
  visitor: ["test", "body"],
  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"],
  fields: {
    test: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    }
  }
});
defineType("WithStatement", {
  visitor: ["object", "body"],
  aliases: ["Statement"],
  fields: {
    object: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    }
  }
});
defineType("AssignmentPattern", {
  visitor: ["left", "right", "decorators"],
  builder: ["left", "right"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, patternLikeCommon(), {
    left: {
      validate: (0, _utils.assertNodeType)("Identifier", "ObjectPattern", "ArrayPattern", "MemberExpression", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression")
    },
    right: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    }
  })
});
defineType("ArrayPattern", {
  visitor: ["elements", "typeAnnotation"],
  builder: ["elements"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, patternLikeCommon(), {
    elements: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeOrValueType)("null", "PatternLike", "LVal")))
    }
  })
});
defineType("ArrowFunctionExpression", {
  builder: ["params", "body", "async"],
  visitor: ["params", "body", "returnType", "typeParameters"],
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
  fields: Object.assign({}, functionCommon(), functionTypeAnnotationCommon(), {
    expression: {
      validate: (0, _utils.assertValueType)("boolean")
    },
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement", "Expression")
    },
    predicate: {
      validate: (0, _utils.assertNodeType)("DeclaredPredicate", "InferredPredicate"),
      optional: true
    }
  })
});
defineType("ClassBody", {
  visitor: ["body"],
  fields: {
    body: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ClassMethod", "ClassPrivateMethod", "ClassProperty", "ClassPrivateProperty", "ClassAccessorProperty", "TSDeclareMethod", "TSIndexSignature", "StaticBlock")))
    }
  }
});
defineType("ClassExpression", {
  builder: ["id", "superClass", "body", "decorators"],
  visitor: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators"],
  aliases: ["Scopable", "Class", "Expression"],
  fields: {
    id: {
      validate: (0, _utils.assertNodeType)("Identifier"),
      optional: true
    },
    typeParameters: {
      validate: (0, _utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
      optional: true
    },
    body: {
      validate: (0, _utils.assertNodeType)("ClassBody")
    },
    superClass: {
      optional: true,
      validate: (0, _utils.assertNodeType)("Expression")
    },
    superTypeParameters: {
      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    },
    implements: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
      optional: true
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    },
    mixins: {
      validate: (0, _utils.assertNodeType)("InterfaceExtends"),
      optional: true
    }
  }
});
defineType("ClassDeclaration", {
  inherits: "ClassExpression",
  aliases: ["Scopable", "Class", "Statement", "Declaration"],
  fields: {
    id: {
      validate: (0, _utils.assertNodeType)("Identifier"),
      optional: true
    },
    typeParameters: {
      validate: (0, _utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
      optional: true
    },
    body: {
      validate: (0, _utils.assertNodeType)("ClassBody")
    },
    superClass: {
      optional: true,
      validate: (0, _utils.assertNodeType)("Expression")
    },
    superTypeParameters: {
      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    },
    implements: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
      optional: true
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    },
    mixins: {
      validate: (0, _utils.assertNodeType)("InterfaceExtends"),
      optional: true
    },
    declare: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    abstract: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    }
  },
  validate: function () {
    const identifier = (0, _utils.assertNodeType)("Identifier");
    return function (parent, key, node) {
      if (!process.env.BABEL_TYPES_8_BREAKING) return;
      if (!(0, _is.default)("ExportDefaultDeclaration", parent)) {
        identifier(node, "id", node.id);
      }
    };
  }()
});
defineType("ExportAllDeclaration", {
  builder: ["source"],
  visitor: ["source", "attributes", "assertions"],
  aliases: ["Statement", "Declaration", "ImportOrExportDeclaration", "ExportDeclaration"],
  fields: {
    source: {
      validate: (0, _utils.assertNodeType)("StringLiteral")
    },
    exportKind: (0, _utils.validateOptional)((0, _utils.assertOneOf)("type", "value")),
    attributes: {
      optional: true,
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ImportAttribute")))
    },
    assertions: {
      optional: true,
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ImportAttribute")))
    }
  }
});
defineType("ExportDefaultDeclaration", {
  visitor: ["declaration"],
  aliases: ["Statement", "Declaration", "ImportOrExportDeclaration", "ExportDeclaration"],
  fields: {
    declaration: {
      validate: (0, _utils.assertNodeType)("TSDeclareFunction", "FunctionDeclaration", "ClassDeclaration", "Expression")
    },
    exportKind: (0, _utils.validateOptional)((0, _utils.assertOneOf)("value"))
  }
});
defineType("ExportNamedDeclaration", {
  builder: ["declaration", "specifiers", "source"],
  visitor: ["declaration", "specifiers", "source", "attributes", "assertions"],
  aliases: ["Statement", "Declaration", "ImportOrExportDeclaration", "ExportDeclaration"],
  fields: {
    declaration: {
      optional: true,
      validate: (0, _utils.chain)((0, _utils.assertNodeType)("Declaration"), Object.assign(function (node, key, val) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;
        if (val && node.specifiers.length) {
          throw new TypeError("Only declaration or specifiers is allowed on ExportNamedDeclaration");
        }
      }, {
        oneOfNodeTypes: ["Declaration"]
      }), function (node, key, val) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;
        if (val && node.source) {
          throw new TypeError("Cannot export a declaration from a source");
        }
      })
    },
    attributes: {
      optional: true,
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ImportAttribute")))
    },
    assertions: {
      optional: true,
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ImportAttribute")))
    },
    specifiers: {
      default: [],
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)(function () {
        const sourced = (0, _utils.assertNodeType)("ExportSpecifier", "ExportDefaultSpecifier", "ExportNamespaceSpecifier");
        const sourceless = (0, _utils.assertNodeType)("ExportSpecifier");
        if (!process.env.BABEL_TYPES_8_BREAKING) return sourced;
        return function (node, key, val) {
          const validator = node.source ? sourced : sourceless;
          validator(node, key, val);
        };
      }()))
    },
    source: {
      validate: (0, _utils.assertNodeType)("StringLiteral"),
      optional: true
    },
    exportKind: (0, _utils.validateOptional)((0, _utils.assertOneOf)("type", "value"))
  }
});
defineType("ExportSpecifier", {
  visitor: ["local", "exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils.assertNodeType)("Identifier")
    },
    exported: {
      validate: (0, _utils.assertNodeType)("Identifier", "StringLiteral")
    },
    exportKind: {
      validate: (0, _utils.assertOneOf)("type", "value"),
      optional: true
    }
  }
});
defineType("ForOfStatement", {
  visitor: ["left", "right", "body"],
  builder: ["left", "right", "body", "await"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
  fields: {
    left: {
      validate: function () {
        if (!process.env.BABEL_TYPES_8_BREAKING) {
          return (0, _utils.assertNodeType)("VariableDeclaration", "LVal");
        }
        const declaration = (0, _utils.assertNodeType)("VariableDeclaration");
        const lval = (0, _utils.assertNodeType)("Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression");
        return function (node, key, val) {
          if ((0, _is.default)("VariableDeclaration", val)) {
            declaration(node, key, val);
          } else {
            lval(node, key, val);
          }
        };
      }()
    },
    right: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    },
    await: {
      default: false
    }
  }
});
defineType("ImportDeclaration", {
  builder: ["specifiers", "source"],
  visitor: ["specifiers", "source", "attributes", "assertions"],
  aliases: ["Statement", "Declaration", "ImportOrExportDeclaration"],
  fields: {
    attributes: {
      optional: true,
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ImportAttribute")))
    },
    assertions: {
      optional: true,
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ImportAttribute")))
    },
    module: {
      optional: true,
      validate: (0, _utils.assertValueType)("boolean")
    },
    phase: {
      default: null,
      validate: (0, _utils.assertOneOf)("source", "defer")
    },
    specifiers: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier")))
    },
    source: {
      validate: (0, _utils.assertNodeType)("StringLiteral")
    },
    importKind: {
      validate: (0, _utils.assertOneOf)("type", "typeof", "value"),
      optional: true
    }
  }
});
defineType("ImportDefaultSpecifier", {
  visitor: ["local"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
defineType("ImportNamespaceSpecifier", {
  visitor: ["local"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
defineType("ImportSpecifier", {
  visitor: ["local", "imported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils.assertNodeType)("Identifier")
    },
    imported: {
      validate: (0, _utils.assertNodeType)("Identifier", "StringLiteral")
    },
    importKind: {
      validate: (0, _utils.assertOneOf)("type", "typeof", "value"),
      optional: true
    }
  }
});
defineType("ImportExpression", {
  visitor: ["source", "options"],
  aliases: ["Expression"],
  fields: {
    phase: {
      default: null,
      validate: (0, _utils.assertOneOf)("source", "defer")
    },
    source: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    options: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    }
  }
});
defineType("MetaProperty", {
  visitor: ["meta", "property"],
  aliases: ["Expression"],
  fields: {
    meta: {
      validate: (0, _utils.chain)((0, _utils.assertNodeType)("Identifier"), Object.assign(function (node, key, val) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;
        let property;
        switch (val.name) {
          case "function":
            property = "sent";
            break;
          case "new":
            property = "target";
            break;
          case "import":
            property = "meta";
            break;
        }
        if (!(0, _is.default)("Identifier", node.property, {
          name: property
        })) {
          throw new TypeError("Unrecognised MetaProperty");
        }
      }, {
        oneOfNodeTypes: ["Identifier"]
      }))
    },
    property: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
const classMethodOrPropertyCommon = () => ({
  abstract: {
    validate: (0, _utils.assertValueType)("boolean"),
    optional: true
  },
  accessibility: {
    validate: (0, _utils.assertOneOf)("public", "private", "protected"),
    optional: true
  },
  static: {
    default: false
  },
  override: {
    default: false
  },
  computed: {
    default: false
  },
  optional: {
    validate: (0, _utils.assertValueType)("boolean"),
    optional: true
  },
  key: {
    validate: (0, _utils.chain)(function () {
      const normal = (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral");
      const computed = (0, _utils.assertNodeType)("Expression");
      return function (node, key, val) {
        const validator = node.computed ? computed : normal;
        validator(node, key, val);
      };
    }(), (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "Expression"))
  }
});
exports.classMethodOrPropertyCommon = classMethodOrPropertyCommon;
const classMethodOrDeclareMethodCommon = () => Object.assign({}, functionCommon(), classMethodOrPropertyCommon(), {
  params: {
    validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Identifier", "Pattern", "RestElement", "TSParameterProperty")))
  },
  kind: {
    validate: (0, _utils.assertOneOf)("get", "set", "method", "constructor"),
    default: "method"
  },
  access: {
    validate: (0, _utils.chain)((0, _utils.assertValueType)("string"), (0, _utils.assertOneOf)("public", "private", "protected")),
    optional: true
  },
  decorators: {
    validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
    optional: true
  }
});
exports.classMethodOrDeclareMethodCommon = classMethodOrDeclareMethodCommon;
defineType("ClassMethod", {
  aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method"],
  builder: ["kind", "key", "params", "body", "computed", "static", "generator", "async"],
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  fields: Object.assign({}, classMethodOrDeclareMethodCommon(), functionTypeAnnotationCommon(), {
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  })
});
defineType("ObjectPattern", {
  visitor: ["properties", "typeAnnotation", "decorators"],
  builder: ["properties"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, patternLikeCommon(), {
    properties: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("RestElement", "ObjectProperty")))
    }
  })
});
defineType("SpreadElement", {
  visitor: ["argument"],
  aliases: ["UnaryLike"],
  deprecatedAlias: "SpreadProperty",
  fields: {
    argument: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
defineType("Super", {
  aliases: ["Expression"]
});
defineType("TaggedTemplateExpression", {
  visitor: ["tag", "quasi", "typeParameters"],
  builder: ["tag", "quasi"],
  aliases: ["Expression"],
  fields: {
    tag: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    quasi: {
      validate: (0, _utils.assertNodeType)("TemplateLiteral")
    },
    typeParameters: {
      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    }
  }
});
defineType("TemplateElement", {
  builder: ["value", "tail"],
  fields: {
    value: {
      validate: (0, _utils.chain)((0, _utils.assertShape)({
        raw: {
          validate: (0, _utils.assertValueType)("string")
        },
        cooked: {
          validate: (0, _utils.assertValueType)("string"),
          optional: true
        }
      }), function templateElementCookedValidator(node) {
        const raw = node.value.raw;
        let unterminatedCalled = false;
        const error = () => {
          throw new Error("Internal @babel/types error.");
        };
        const {
          str,
          firstInvalidLoc
        } = (0, _helperStringParser.readStringContents)("template", raw, 0, 0, 0, {
          unterminated() {
            unterminatedCalled = true;
          },
          strictNumericEscape: error,
          invalidEscapeSequence: error,
          numericSeparatorInEscapeSequence: error,
          unexpectedNumericSeparator: error,
          invalidDigit: error,
          invalidCodePoint: error
        });
        if (!unterminatedCalled) throw new Error("Invalid raw");
        node.value.cooked = firstInvalidLoc ? null : str;
      })
    },
    tail: {
      default: false
    }
  }
});
defineType("TemplateLiteral", {
  visitor: ["quasis", "expressions"],
  aliases: ["Expression", "Literal"],
  fields: {
    quasis: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TemplateElement")))
    },
    expressions: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression", "TSType")), function (node, key, val) {
        if (node.quasis.length !== val.length + 1) {
          throw new TypeError(`Number of ${node.type} quasis should be exactly one more than the number of expressions.\nExpected ${val.length + 1} quasis but got ${node.quasis.length}`);
        }
      })
    }
  }
});
defineType("YieldExpression", {
  builder: ["argument", "delegate"],
  visitor: ["argument"],
  aliases: ["Expression", "Terminatorless"],
  fields: {
    delegate: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("boolean"), Object.assign(function (node, key, val) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;
        if (val && !node.argument) {
          throw new TypeError("Property delegate of YieldExpression cannot be true if there is no argument");
        }
      }, {
        type: "boolean"
      })),
      default: false
    },
    argument: {
      optional: true,
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
defineType("AwaitExpression", {
  builder: ["argument"],
  visitor: ["argument"],
  aliases: ["Expression", "Terminatorless"],
  fields: {
    argument: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
defineType("Import", {
  aliases: ["Expression"]
});
defineType("BigIntLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("string")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
defineType("ExportNamespaceSpecifier", {
  visitor: ["exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    exported: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
defineType("OptionalMemberExpression", {
  builder: ["object", "property", "computed", "optional"],
  visitor: ["object", "property"],
  aliases: ["Expression"],
  fields: {
    object: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    property: {
      validate: function () {
        const normal = (0, _utils.assertNodeType)("Identifier");
        const computed = (0, _utils.assertNodeType)("Expression");
        const validator = Object.assign(function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        }, {
          oneOfNodeTypes: ["Expression", "Identifier"]
        });
        return validator;
      }()
    },
    computed: {
      default: false
    },
    optional: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertValueType)("boolean") : (0, _utils.chain)((0, _utils.assertValueType)("boolean"), (0, _utils.assertOptionalChainStart)())
    }
  }
});
defineType("OptionalCallExpression", {
  visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
  builder: ["callee", "arguments", "optional"],
  aliases: ["Expression"],
  fields: {
    callee: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    arguments: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName", "ArgumentPlaceholder")))
    },
    optional: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertValueType)("boolean") : (0, _utils.chain)((0, _utils.assertValueType)("boolean"), (0, _utils.assertOptionalChainStart)())
    },
    typeArguments: {
      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation"),
      optional: true
    },
    typeParameters: {
      validate: (0, _utils.assertNodeType)("TSTypeParameterInstantiation"),
      optional: true
    }
  }
});
defineType("ClassProperty", {
  visitor: ["key", "value", "typeAnnotation", "decorators"],
  builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
  aliases: ["Property"],
  fields: Object.assign({}, classMethodOrPropertyCommon(), {
    value: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    },
    definite: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    typeAnnotation: {
      validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: true
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    },
    readonly: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    declare: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    variance: {
      validate: (0, _utils.assertNodeType)("Variance"),
      optional: true
    }
  })
});
defineType("ClassAccessorProperty", {
  visitor: ["key", "value", "typeAnnotation", "decorators"],
  builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
  aliases: ["Property", "Accessor"],
  fields: Object.assign({}, classMethodOrPropertyCommon(), {
    key: {
      validate: (0, _utils.chain)(function () {
        const normal = (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "PrivateName");
        const computed = (0, _utils.assertNodeType)("Expression");
        return function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };
      }(), (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "Expression", "PrivateName"))
    },
    value: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    },
    definite: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    typeAnnotation: {
      validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: true
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    },
    readonly: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    declare: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    variance: {
      validate: (0, _utils.assertNodeType)("Variance"),
      optional: true
    }
  })
});
defineType("ClassPrivateProperty", {
  visitor: ["key", "value", "decorators", "typeAnnotation"],
  builder: ["key", "value", "decorators", "static"],
  aliases: ["Property", "Private"],
  fields: {
    key: {
      validate: (0, _utils.assertNodeType)("PrivateName")
    },
    value: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    },
    typeAnnotation: {
      validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: true
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    },
    static: {
      validate: (0, _utils.assertValueType)("boolean"),
      default: false
    },
    readonly: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    definite: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    variance: {
      validate: (0, _utils.assertNodeType)("Variance"),
      optional: true
    }
  }
});
defineType("ClassPrivateMethod", {
  builder: ["kind", "key", "params", "body", "static"],
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method", "Private"],
  fields: Object.assign({}, classMethodOrDeclareMethodCommon(), functionTypeAnnotationCommon(), {
    kind: {
      validate: (0, _utils.assertOneOf)("get", "set", "method"),
      default: "method"
    },
    key: {
      validate: (0, _utils.assertNodeType)("PrivateName")
    },
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  })
});
defineType("PrivateName", {
  visitor: ["id"],
  aliases: ["Private"],
  fields: {
    id: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
defineType("StaticBlock", {
  visitor: ["body"],
  fields: {
    body: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Statement")))
    }
  },
  aliases: ["Scopable", "BlockParent", "FunctionParent"]
});

//# sourceMappingURL=core.js.map
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  rseRelativeUrl)(a);(!this.isSsr||o!==(0,w.addBasePath)(this.asPath)||u!==(0,w.addBasePath)(this.pathname))&&(!this._bps||this._bps(n))&&this.change("replaceState",a,o,Object.assign({},i,{shallow:i.shallow&&this._shallow,locale:i.locale||this.defaultLocale,_h:0}),t)};let S=(0,o.removeTrailingSlash)(e);this.components={},"/_error"!==e&&(this.components[S]={Component:s,initial:!0,props:a,err:c,__N_SSG:a&&a.__N_SSG,__N_SSP:a&&a.__N_SSP}),this.components["/_app"]={Component:l,styleSheets:[]};{let{BloomFilter:e}=r(4258),t={numItems:22,errorRate:.01,numBits:211,numHashes:7,bitArray:[0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0]},n={numItems:0,errorRate:.01,numBits:0,numHashes:null,bitArray:[]};(null==t?void 0:t.numHashes)&&(this._bfl_s=new e(t.numItems,t.errorRate),this._bfl_s.import(t)),(null==n?void 0:n.numHashes)&&(this._bfl_d=new e(n.numItems,n.errorRate),this._bfl_d.import(n))}this.events=V.events,this.pageLoader=i;let j=(0,h.isDynamicRoute)(e)&&self.__NEXT_DATA__.autoExport;if(this.basePath="",this.sub=f,this.clc=null,this._wrapApp=u,this.isSsr=!0,this.isLocaleDomain=!1,this.isReady=!!(self.__NEXT_DATA__.gssp||self.__NEXT_DATA__.gip||self.__NEXT_DATA__.appGip&&!self.__NEXT_DATA__.gsp||!j&&!self.location.search),this.state={route:S,pathname:e,query:t,asPath:j?e:n,isPreview:!!P,locale:void 0,isFallback:m},this._initialMatchesMiddlewarePromise=Promise.resolve(!1),!n.startsWith("//")){let r={locale:g},a=(0,d.getURL)();this._initialMatchesMiddlewarePromise=N({router:this,locale:g,asPath:a}).then(o=>(r._shouldResolveHref=n!==e,this.changeState("replaceState",o?a:(0,y.formatWithValidation)({pathname:(0,w.addBasePath)(e),query:t}),a,r),o))}window.addEventListener("popstate",this.onPopState)}}V.events=(0,f.default)()},9092:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return o}});let n=r(6584),a=r(1509);function o(e,t,r,o){if(!t||t===r)return e;let i=e.toLowerCase();return!o&&((0,a.pathHasPrefix)(i,"/api")||(0,a.pathHasPrefix)(i,"/"+t.toLowerCase()))?e:(0,n.addPathPrefix)(e,"/"+t)}},6584:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addPathPrefix",{enumerable:!0,get:function(){return a}});let n=r(6583);function a(e,t){if(!e.startsWith("/")||!t)return e;let{pathname:r,query:a,hash:o}=(0,n.parsePath)(e);return""+t+r+a+o}},8445:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addPathSuffix",{enumerable:!0,get:function(){return a}});let n=r(6583);function a(e,t){if(!e.startsWith("/")||!t)return e;let{pathname:r,query:a,hash:o}=(0,n.parsePath)(e);return""+r+t+a+o}},6213:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{normalizeAppPath:function(){return a},normalizeRscPath:function(){return o}});let n=r(2131);function a(e){return(0,n.ensureLeadingSlash)(e.split("/").reduce((e,t,r,n)=>!t||"("===t[0]&&t.endsWith(")")||"@"===t[0]||("page"===t||"route"===t)&&r===n.length-1?e:e+"/"+t,""))}function o(e,t){return t?e.replace(/\.rsc($|\?)/,"$1"):e}},3820:function(e,t){"use strict";function r(e,t){let r=Object.keys(e);if(r.length!==Object.keys(t).length)return!1;for(let n=r.length;n--;){let a=r[n];if("query"===a){let r=Object.keys(e.query);if(r.length!==Object.keys(t.query).length)return!1;for(let n=r.length;n--;){let a=r[n];if(!t.query.hasOwnProperty(a)||e.query[a]!==t.query[a])return!1}}else if(!t.hasOwnProperty(a)||e[a]!==t[a])return!1}return!0}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"compareRouterStates",{enumerable:!0,get:function(){return r}})},8497:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"formatNextPathnameInfo",{enumerable:!0,get:function(){return l}});let n=r(9861),a=r(6584),o=r(8445),i=r(9092);function l(e){let t=(0,i.addLocale)(e.pathname,e.locale,e.buildId?void 0:e.defaultLocale,e.ignorePrefix);return(e.buildId||!e.trailingSlash)&&(t=(0,n.removeTrailingSlash)(t)),e.buildId&&(t=(0,o.addPathSuffix)((0,a.addPathPrefix)(t,"/_next/data/"+e.buildId),"/"===e.pathname?"index.json":".json")),t=(0,a.addPathPrefix)(t,e.basePath),!e.buildId&&e.trailingSlash?t.endsWith("/")?t:(0,o.addPathSuffix)(t,"/"):(0,n.removeTrailingSlash)(t)}},1896:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return i},urlObjectKeys:function(){return l},formatWithValidation:function(){return u}});let n=r(1757),a=n._(r(2946)),o=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:r}=e,n=e.protocol||"",i=e.pathname||"",l=e.hash||"",u=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:r&&(s=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(s+=":"+e.port)),u&&"object"==typeof u&&(u=String(a.urlQueryToSearchParams(u)));let c=e.search||u&&"?"+u||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||o.test(n))&&!1!==s?(s="//"+(s||""),i&&"/"!==i[0]&&(i="/"+i)):s||(s=""),l&&"#"!==l[0]&&(l="#"+l),c&&"?"!==c[0]&&(c="?"+c),""+n+s+(i=i.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+l}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return i(e)}},1033:function(e,t){"use strict";function r(e,t){void 0===t&&(t="");let r="/"===e?"/index":/^\/index(\/|$)/.test(e)?"/index"+e:""+e;return r+t}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}})},1714:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getNextPathnameInfo",{enumerable:!0,get:function(){return i}});let n=r(5935),a=r(5938),o=r(1509);function i(e,t){var r,i,l;let{basePath:u,i18n:s,trailingSlash:c}=null!=(r=t.nextConfig)?r:{},f={pathname:e,trailingSlash:"/"!==e?e.endsWith("/"):c};if(u&&(0,o.pathHasPrefix)(f.pathname,u)&&(f.pathname=(0,a.removePathPrefix)(f.pathname,u),f.basePath=u),!0===t.parseData&&f.pathname.startsWith("/_next/data/")&&f.pathname.endsWith(".json")){let e=f.pathname.replace(/^\/_next\/data\//,"").replace(/\.json$/,"").split("/"),t=e[0];f.pathname="index"!==e[1]?"/"+e.slice(1).join("/"):"/",f.buildId=t}if(t.i18nProvider){let e=t.i18nProvider.analyze(f.pathname);f.locale=e.detectedLocale,f.pathname=null!=(i=e.pathname)?i:f.pathname}else if(s){let e=(0,n.normalizeLocalePath)(f.pathname,s.locales);f.locale=e.detectedLocale,f.pathname=null!=(l=e.pathname)?l:f.pathname}return f}},75:function(e,t){"use strict";function r(e,t){void 0===t&&(t={});let r=document.documentElement,n=r.style.scrollBehavior;r.style.scrollBehavior="auto",t.dontForceLayout||r.getClientRects(),e(),r.style.scrollBehavior=n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"handleSmoothScroll",{enumerable:!0,get:function(){return r}})},1718:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getSortedRoutes:function(){return n.getSortedRoutes},isDynamicRoute:function(){return a.isDynamicRoute}});let n=r(700),a=r(4138)},3529:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return o}});let n=r(2754),a=r(5986);function o(e,t,r){let o="",i=(0,a.getRouteRegex)(e),l=i.groups,u=(t!==e?(0,n.getRouteMatcher)(i)(t):"")||r;o=e;let s=Object.keys(l);return s.every(e=>{let t=u[e]||"",{repeat:r,optional:n}=l[e],a="["+(r?"...":"")+e+"]";return n&&(a=(t?"":"/")+"["+a+"]"),r&&!Array.isArray(t)&&(t=[t]),(n||e in u)&&(o=o.replace(a,r?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(o=""),{params:s,result:o}}},7085:function(e,t){"use strict";function r(e){return/Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isBot",{enumerable:!0,get:function(){return r}})},4138:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return n}});let r=/\/\[[^/]+?\](?=\/|$)/;function n(e){return r.test(e)}},3800:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return o}});let n=r(4207),a=r(420);function o(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,a.hasBasePath)(r.pathname)}catch(e){return!1}}},4540:function(e,t){"use strict";function r(e,t){let r={};return Object.keys(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return r}})},6583:function(e,t){"use strict";function r(e){let t=e.indexOf("#"),r=e.indexOf("?"),n=r>-1&&(t<0||r<t);return n||t>-1?{pathname:e.substring(0,n?r:t),query:n?e.substring(r,t>-1?t:void 0):"",hash:t>-1?e.slice(t):""}:{pathname:e,query:"",hash:""}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parsePath",{enumerable:!0,get:function(){return r}})},2837:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parseRelativeUrl",{enumerable:!0,get:function(){return o}});let n=r(4207),a=r(2946);function o(e,t){let r=new URL((0,n.getLocationOrigin)()),o=t?new URL(t,r):e.startsWith(".")?new URL(window.location.href):r,{pathname:i,searchParams:l,search:u,hash:s,href:c,origin:f}=new URL(e,o);if(f!==r.origin)throw Error("invariant: invalid relative URL, router received "+e);return{pathname:i,query:(0,a.searchParamsToUrlQuery)(l),search:u,hash:s,href:c.slice(r.origin.length)}}},1509:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"pathHasPrefix",{enumerable:!0,get:function(){return a}});let n=r(6583);function a(e,t){if("string"!=typeof e)return!1;let{pathname:r}=(0,n.parsePath)(e);return r===t||r.startsWith(t+"/")}},2946:function(e,t){"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function a(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,a]=e;Array.isArray(a)?a.forEach(e=>t.append(r,n(e))):t.set(r,n(a))}),t}function o(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return a},assign:function(){return o}})},5938:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"removePathPrefix",{enumerable:!0,get:function(){return a}});let n=r(1509);function a(e,t){if(!(0,n.pathHasPrefix)(e,t))return e;let r=e.slice(t.length);return r.startsWith("/")?r:"/"+r}},9861:function(e,t){"use strict";function r(e){return e.replace(/\/$/,"")||"/"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"removeTrailingSlash",{enumerable:!0,get:function(){return r}})},9413:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return f}});let n=r(2946),a=r(1896),o=r(4540),i=r(4207),l=r(1583),u=r(3800),s=r(4138),c=r(3529);function f(e,t,r){let f;let d="string"==typeof t?t:(0,a.formatWithValidation)(t),h=d.match(/^[a-zA-Z]{1,}:\/\//),p=h?d.slice(h[0].length):d;if((p.split("?")[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,i.normalizeRepeatedSlashes)(p);d=(h?h[0]:"")+t}if(!(0,u.isLocalURL)(d))return r?[d]:d;try{f=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){f=new URL("/","http://n")}try{let e=new URL(d,f);e.pathname=(0,l.normalizePathTrailingSlash)(e.pathname);let t="";if((0,s.isDynamicRoute)(e.pathname)&&e.searchParams&&r){let r=(0,n.searchParamsToUrlQuery)(e.searchParams),{result:i,params:l}=(0,c.interpolateAs)(e.pathname,e.pathname,r);i&&(t=(0,a.formatWithValidation)({pathname:i,hash:e.hash,query:(0,o.omit)(r,l)}))}let i=e.origin===f.origin?e.href.slice(e.origin.length):e.href;return r?[i,t||i]:i}catch(e){return r?[d]:d}}},2754:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return a}});let n=r(4207);function a(e){let{re:t,groups:r}=e;return e=>{let a=t.exec(e);if(!a)return!1;let o=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},i={};return Object.keys(r).forEach(e=>{let t=r[e],n=a[t.pos];void 0!==n&&(i[e]=~n.indexOf("/")?n.split("/").map(e=>o(e)):t.repeat?[o(n)]:o(n))}),i}}},5986:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getRouteRegex:function(){return u},getNamedRouteRegex:function(){return f},getNamedMiddlewareRegex:function(){return d}});let n=r(2407),a=r(9630),o=r(9861);function i(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function l(e){let t=(0,o.removeTrailingSlash)(e).slice(1).split("/"),r={},l=1;return{parameterizedRoute:t.map(e=>{let t=n.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),o=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&o){let{key:e,optional:n,repeat:u}=i(o[1]);return r[e]={pos:l++,repeat:u,optional:n},"/"+(0,a.escapeStringRegexp)(t)+"([^/]+?)"}if(!o)return"/"+(0,a.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:n}=i(o[1]);return r[e]={pos:l++,repeat:t,optional:n},t?n?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function u(e){let{parameterizedRoute:t,groups:r}=l(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function s(e){let t,r,{segment:n,routeKeys:a,keyPrefix:o}=e,l=(t=97,r=1,()=>{let e="";for(let n=0;n<r;n++)e+=String.fromCharCode(t),++t>122&&(r++,t=97);return e}),{key:u,optional:s,repeat:c}=i(n),f=u.replace(/\W/g,"");o&&(f=""+o+f);let d=!1;return(0===f.length||f.length>30)&&(d=!0),isNaN(parseInt(f.slice(0,1)))||(d=!0),d&&(f=l()),o?a[f]=""+o+u:a[f]=""+u,c?s?"(?:/(?<"+f+">.+?))?":"/(?<"+f+">.+?)":"/(?<"+f+">[^/]+?)"}function c(e,t){let r=(0,o.removeTrailingSlash)(e).slice(1).split("/"),i={};return{namedParameterizedRoute:r.map(e=>{let r=n.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),o=e.match(/\[((?:\[.*\])|.+)\]/);return r&&o?s({segment:o[1],routeKeys:i,keyPrefix:t?"nxtI":void 0}):o?s({segment:o[1],routeKeys:i,keyPrefix:t?"nxtP":void 0}):"/"+(0,a.escapeStringRegexp)(e)}).join(""),routeKeys:i}}function f(e,t){let r=c(e,t);return{...u(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function d(e,t){let{parameterizedRoute:r}=l(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:a}=c(e,!1);return{namedRegex:"^"+a+(n?"(?:(/.*)?)":"")+"$"}}},700:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSortedRoutes",{enumerable:!0,get:function(){return n}});class r{insert(e){this._insert(e.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(e){void 0===e&&(e="/");let t=[...this.children.keys()].sort();null!==this.slugName&&t.splice(t.indexOf("[]"),1),null!==this.restSlugName&&t.splice(t.indexOf("[...]"),1),null!==this.optionalRestSlugName&&t.splice(t.indexOf("[[...]]"),1);let r=t.map(t=>this.children.get(t)._smoosh(""+e+t+"/")).reduce((e,t)=>[...e,...t],[]);if(null!==this.slugName&&r.push(...this.children.get("[]")._smoosh(e+"["+this.slugName+"]/")),!this.placeholder){let t="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+t+'" and "'+t+"[[..."+this.optionalRestSlugName+']]").');r.unshift(t)}return null!==this.restSlugName&&r.push(...this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&r.push(...this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/")),r}_insert(e,t,n){if(0===e.length){this.placeholder=!1;return}if(n)throw Error("Catch-all must be the last part of the URL.");let a=e[0];if(a.startsWith("[")&&a.endsWith("]")){let r=a.slice(1,-1),i=!1;if(r.startsWith("[")&&r.endsWith("]")&&(r=r.slice(1,-1),i=!0),r.startsWith("...")&&(r=r.substring(3),n=!0),r.startsWith("[")||r.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+r+"').");if(r.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+r+"').");function o(e,r){if(null!==e&&e!==r)throw Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+r+"').");t.forEach(e=>{if(e===r)throw Error('You cannot have the same slug name "'+r+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===a.replace(/\W/g,""))throw Error('You cannot have the slug names "'+e+'" and "'+r+'" differ only by non-word symbols within a single dynamic path')}),t.push(r)}if(n){if(i){if(null!=this.restSlugName)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+e[0]+'" ).');o(this.optionalRestSlugName,r),this.optionalRestSlugName=r,a="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+e[0]+'").');o(this.restSlugName,r),this.restSlugName=r,a="[...]"}}else{if(i)throw Error('Optional route parameters are not yet supported ("'+e[0]+'").');o(this.slugName,r),this.slugName=r,a="[]"}}this.children.has(a)||this.children.set(a,new r),this.children.get(a)._insert(e.slice(1),t,n)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}}function n(e){let t=new r;return e.forEach(e=>t.insert(e)),t.smoosh()}},755:function(e,t){"use strict";let r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return n},setConfig:function(){return a}});let n=()=>r;function a(e){r=e}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9274:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let n=r(1757),a=n._(r(7294)),o=a.useLayoutEffect,i=a.useEffect;function l(e){let{headManager:t,reduceComponentsToState:r}=e;function n(){if(t&&t.mountedInstances){let n=a.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(n,e))}}return o(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=n),()=>{t&&(t._pendingUpdate=n)})),i(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},4207:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{WEB_VITALS:function(){return r},execOnce:function(){return n},isAbsoluteUrl:function(){return o},getLocationOrigin:function(){return i},getURL:function(){return l},getDisplayName:function(){return u},isResSent:function(){return s},normalizeRepeatedSlashes:function(){return c},loadGetInitialProps:function(){return f},SP:function(){return d},ST:function(){return h},DecodeError:function(){return p},NormalizeError:function(){return m},PageNotFoundError:function(){return g},MissingStaticPage:function(){return y},MiddlewareNotFoundError:function(){return _},stringifyError:function(){return b}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,a=Array(n),o=0;o<n;o++)a[o]=arguments[o];return r||(r=!0,t=e(...a)),t}}let a=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,o=e=>a.test(e);function i(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function l(){let{href:e}=window.location,t=i();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function s(e){return e.finished||e.headersSent}function c(e){let t=e.split("?"),r=t[0];return r.replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&s(r))return n;if(!n){let t='"'+u(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.';throw Error(t)}return n}let d="undefined"!=typeof performance,h=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class p extends Error{}class m extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class _ extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function b(e){return JSON.stringify({message:e.message,stack:e.stack})}},421:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},8018:function(e){var t,r,n,a,o,i,l,u,s,c,f,d,h,p,m,g,y,_,b,v,P,w,S,j,O,E,R,x,C,M,A,L,I,T,N,k,D,B,H,U,F,W,q,z,G,V;(t={}).d=function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},void 0!==t&&(t.ab="//"),r={},t.r(r),t.d(r,{getCLS:function(){return S},getFCP:function(){return v},getFID:function(){return M},getINP:function(){return W},getLCP:function(){return z},getTTFB:function(){return V},onCLS:function(){return S},onFCP:function(){return v},onFID:function(){return M},onINP:function(){return W},onLCP:function(){return z},onTTFB:function(){return V}}),u=-1,s=function(e){addEventListener("pageshow",function(t){t.persisted&&(u=t.timeStamp,e(t))},!0)},c=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},f=function(){var e=c();return e&&e.activationStart||0},d=function(e,t){var r=c(),n="navigate";return u>=0?n="back-forward-cache":r&&(n=document.prerendering||f()>0?"prerender":r.type.replace(/_/g,"-")),{name:e,value:void 0===t?-1:t,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:n}},h=function(e,t,r){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var n=new PerformanceObserver(function(e){t(e.getEntries())});return n.observe(Object.assign({type:e,buffered:!0},r||{})),n}}catch(e){}},p=function(e,t){var r=function r(n){"pagehide"!==n.type&&"hidden"!==document.visibilityState||(e(n),t&&(removeEventListener("visibilitychange",r,!0),removeEventListener("pagehide",r,!0)))};addEventListener("visibilitychange",r,!0),addEventListener("pagehide",r,!0)},m=function(e,t,r,n){var a,o;return function(i){var l;t.value>=0&&(i||n)&&((o=t.value-(a||0))||void 0===a)&&(a=t.value,t.delta=o,t.rating=(l=t.value)>r[1]?"poor":l>r[0]?"needs-improvement":"good",e(t))}},g=-1,y=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},_=function(){p(function(e){g=e.timeStamp},!0)},b=function(){return g<0&&(g=y(),_(),s(function(){setTimeout(function(){g=y(),_()},0)})),{get firstHiddenTime(){return g}}},v=function(e,t){t=t||{};var r,n=[1800,3e3],a=b(),o=d("FCP"),i=function(e){e.forEach(function(e){"first-contentful-paint"===e.name&&(u&&u.disconnect(),e.startTime<a.firstHiddenTime&&(o.value=e.startTime-f(),o.entries.push(e),r(!0)))})},l=window.performance&&window.performance.getEntriesByName&&window.performance.getEntriesByName("first-contentful-paint")[0],u=l?null:h("paint",i);(l||u)&&(r=m(e,o,n,t.reportAllChanges),l&&i([l]),s(function(a){r=m(e,o=d("FCP"),n,t.reportAllChanges),requestAnimationFrame(function(){requestAnimationFrame(function(){o.value=performance.now()-a.timeStamp,r(!0)})})}))},P=!1,w=-1,S=function(e,t){t=t||{};var r=[.1,.25];P||(v(function(e){w=e.value}),P=!0);var n,a=function(t){w>-1&&e(t)},o=d("CLS",0),i=0,l=[],u=function(e){e.forEach(function(e){if(!e.hadRecentInput){var t=l[0],r=l[l.length-1];i&&e.startTime-r.startTime<1e3&&e.startTime-t.startTime<5e3?(i+=e.value,l.push(e)):(i=e.value,l=[e]),i>o.value&&(o.value=i,o.entries=l,n())}})},c=h("layout-shift",u);c&&(n=m(a,o,r,t.reportAllChanges),p(function(){u(c.takeRecords()),n(!0)}),s(function(){i=0,w=-1,n=m(a,o=d("CLS",0),r,t.reportAllChanges)}))},j={passive:!0,capture:!0},O=new Date,E=function(e,t){n||(n=t,a=e,o=new Date,C(removeEventListener),R())},R=function(){if(a>=0&&a<o-O){var e={entryType:"first-input",name:n.type,target:n.target,cancelable:n.cancelable,startTime:n.timeStamp,processingStart:n.timeStamp+a};i.forEach(function(t){t(e)}),i=[]}},x=function(e){if(e.cancelable){var t,r,n,a=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?(t=function(){E(a,e),n()},r=function(){n()},n=function(){removeEventListener("pointerup",t,j),removeEventListener("pointercancel",r,j)},addEventListener("pointerup",t,j),addEventListener("pointercancel",r,j)):E(a,e)}},C=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach(function(t){return e(t,x,j)})},M=function(e,t){t=t||{};var r,o=[100,300],l=b(),u=d("FID"),c=function(e){e.startTime<l.firstHiddenTime&&(u.value=e.processingStart-e.startTime,u.entries.push(e),r(!0))},f=function(e){e.forEach(c)},g=h("first-input",f);r=m(e,u,o,t.reportAllChanges),g&&p(function(){f(g.takeRecords()),g.disconnect()},!0),g&&s(function(){r=m(e,u=d("FID"),o,t.reportAllChanges),i=[],a=-1,n=null,C(addEventListener),i.push(c),R()})},A=0,L=1/0,I=0,T=function(e){e.forEach(function(e){e.interactionId&&(L=Math.min(L,e.interactionId),A=(I=Math.max(I,e.interactionId))?(I-L)/7+1:0)})},N=function(){return l?A:performance.interactionCount||0},k=function(){"interactionCount"in performance||l||(l=h("event",T,{type:"event",buffered:!0,durationThreshold:0}))},D=0,B=function(){return N()-D},H=[],U={},F=function(e){var t=H[H.length-1],r=U[e.interactionId];if(r||H.length<10||e.duration>t.latency){if(r)r.entries.push(e),r.latency=Math.max(r.latency,e.duration);else{var n={id:e.interactionId,latency:e.duration,entries:[e]};U[n.id]=n,H.push(n)}H.sort(function(e,t){return t.latency-e.latency}),H.splice(10).forEach(function(e){delete U[e.id]})}},W=function(e,t){t=t||{};var r=[200,500];k();var n,a=d("INP"),o=function(e){e.forEach(function(e){e.interactionId&&F(e),"first-input"!==e.entryType||H.some(function(t){return t.entries.some(function(t){return e.duration===t.duration&&e.startTime===t.startTime})})||F(e)});var t,r=(t=Math.min(H.length-1,Math.floor(B()/50)),H[t]);r&&r.latency!==a.value&&(a.value=r.latency,a.entries=r.entries,n())},i=h("event",o,{durationThreshold:t.durationThreshold||40});n=m(e,a,r,t.reportAllChanges),i&&(i.observe({type:"first-input",buffered:!0}),p(function(){o(i.takeRecords()),a.value<0&&B()>0&&(a.value=0,a.entries=[]),n(!0)}),s(function(){H=[],D=N(),n=m(e,a=d("INP"),r,t.reportAllChanges)}))},q={},z=function(e,t){t=t||{};var r,n=[2500,4e3],a=b(),o=d("LCP"),i=function(e){var t=e[e.length-1];if(t){var n=t.startTime-f();n<a.firstHiddenTime&&(o.value=n,o.entries=[t],r())}},l=h("largest-contentful-paint",i);if(l){r=m(e,o,n,t.reportAllChanges);var u=function(){q[o.id]||(i(l.takeRecords()),l.disconnect(),q[o.id]=!0,r(!0))};["keydown","click"].forEach(function(e){addEventListener(e,u,{once:!0,capture:!0})}),p(u,!0),s(function(a){r=m(e,o=d("LCP"),n,t.reportAllChanges),requestAnimationFrame(function(){requestAnimationFrame(function(){o.value=performance.now()-a.timeStamp,q[o.id]=!0,r(!0)})})})}},G=function e(t){document.prerendering?addEventListener("prerenderingchange",function(){return e(t)},!0):"complete"!==document.readyState?addEventListener("load",function(){return e(t)},!0):setTimeout(t,0)},V=function(e,t){t=t||{};var r=[800,1800],n=d("TTFB"),a=m(e,n,r,t.reportAllChanges);G(function(){var o=c();if(o){if(n.value=Math.max(o.responseStart-f(),0),n.value<0||n.value>performance.now())return;n.entries=[o],a(!0),s(function(){(a=m(e,n=d("TTFB",0),r,t.reportAllChanges))(!0)})}})},e.exports=r},9423:function(e,t){"use strict";function r(e){return"/api"===e||!!(null==e?void 0:e.startsWith("/api/"))}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isAPIRoute",{enumerable:!0,get:function(){return r}})},676:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return a},getProperError:function(){return o}});let n=r(7235);function a(e){return"object"==typeof e&&null!==e&&"name"in e&&"message"in e}function o(e){return a(e)?e:Error((0,n.isPlainObject)(e)?JSON.stringify(e):e+"")}},2407:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{INTERCEPTION_ROUTE_MARKERS:function(){return a},isInterceptionRouteAppPath:function(){return o},extractInterceptionRouteInformation:function(){return i}});let n=r(6213),a=["(..)(..)","(.)","(..)","(...)"];function o(e){return void 0!==e.split("/").find(e=>a.find(t=>e.startsWith(t)))}function i(e){let t,r,o;for(let n of e.split("/"))if(r=a.find(e=>n.startsWith(e))){[t,o]=e.split(r,2);break}if(!t||!r||!o)throw Error(`Invalid interception route: ${e}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);switch(t=(0,n.normalizeAppPath)(t),r){case"(.)":o="/"===t?`/${o}`:t+"/"+o;break;case"(..)":if("/"===t)throw Error(`Invalid interception route: ${e}. Cannot use (..) marker at the root level, use (.) instead.`);o=t.split("/").slice(0,-1).concat(o).join("/");break;case"(...)":o="/"+o;break;case"(..)(..)":let i=t.split("/");if(i.length<=2)throw Error(`Invalid interception route: ${e}. Cannot use (..)(..) marker at the root level or one level up.`);o=i.slice(0,-2).concat(o).join("/");break;default:throw Error("Invariant: unexpected marker")}return{interceptingRoute:t,interceptedRoute:o}}},2431:function(){},8754:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}r.r(t),r.d(t,{_:function(){return n},_interop_require_default:function(){return n}})},1757:function(e,t,r){"use strict";function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(n=function(e){return e?r:t})(e)}function a(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=n(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}return a.default=e,r&&r.set(e,a),a}r.r(t),r.d(t,{_:function(){return a},_interop_require_wildcard:function(){return a}})}},function(e){e.O(0,[9774],function(){return e(e.s=7578)}),_N_E=e.O()}]);