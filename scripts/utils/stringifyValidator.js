export default function stringifyValidator(validator, nodePrefix) {
  if (validator === undefined) {
    return "any";
  }

  if (validator.each) {
    return (
      '<span className="code">' +
      `Array\\<${stringifyValidator(validator.each, nodePrefix)}\\>` +
      "</span>"
    );
  }

  if (validator.chainOf) {
    const ret = stringifyValidator(validator.chainOf[1], nodePrefix);
    return Array.isArray(ret) && ret.length === 1 && ret[0] === "any"
      ? stringifyValidator(validator.chainOf[0], nodePrefix)
      : ret;
  }

  if (validator.oneOf) {
    return "`" + validator.oneOf.map(JSON.stringify).join(" | ") + "`";
  }

  if (validator.oneOfNodeTypes) {
    return (
      '<span className="code">' +
      validator.oneOfNodeTypes
        .map((_) => generateLink(nodePrefix + _))
        .join(" | ") +
      "</span>"
    );
  }

  if (validator.oneOfNodeOrValueTypes) {
    return validator.oneOfNodeOrValueTypes
      .map((_) => {
        return isValueType(_) ? _ : generateLink(nodePrefix + _);
      })
      .join(" | ");
  }

  if (validator.type) {
    return validator.type;
  }

  if (validator.shapeOf) {
    return (
      "`{ " +
      Object.keys(validator.shapeOf)
        .map((shapeKey) => {
          const propertyDefinition = validator.shapeOf[shapeKey];
          if (propertyDefinition.validate) {
            const isOptional =
              propertyDefinition.optional || propertyDefinition.default != null;
            return (
              shapeKey +
              (isOptional ? "?: " : ": ") +
              stringifyValidator(propertyDefinition.validate)
            );
          }
          return null;
        })
        .filter(Boolean)
        .join(", ") +
      " }`"
    );
  }

  return ["any"];
}

/**
 * Heuristic to decide whether or not the given type is a value type (eg. "null")
 * or a Node type (eg. "Expression").
 */
export function isValueType(type) {
  return type.charAt(0).toLowerCase() === type.charAt(0);
}

function generateLink(type) {
  return `[${type}](#${type.toLowerCase()})`;
}
