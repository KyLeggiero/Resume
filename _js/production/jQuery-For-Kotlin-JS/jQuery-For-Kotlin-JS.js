if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'jQuery-For-Kotlin-JS'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'jQuery-For-Kotlin-JS'.");
}
this['jQuery-For-Kotlin-JS'] = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Unit = Kotlin.kotlin.Unit;
  var Iterator = Kotlin.kotlin.collections.Iterator;
  var throwCCE = Kotlin.throwCCE;
  CssParameterForAttributeSelector$exactly.prototype = Object.create(CssParameterForAttributeSelector.prototype);
  CssParameterForAttributeSelector$exactly.prototype.constructor = CssParameterForAttributeSelector$exactly;
  CssParameterForAttributeSelector$listContainsExactly.prototype = Object.create(CssParameterForAttributeSelector.prototype);
  CssParameterForAttributeSelector$listContainsExactly.prototype.constructor = CssParameterForAttributeSelector$listContainsExactly;
  CssParameterForAttributeSelector$languageSubCode.prototype = Object.create(CssParameterForAttributeSelector.prototype);
  CssParameterForAttributeSelector$languageSubCode.prototype.constructor = CssParameterForAttributeSelector$languageSubCode;
  CssParameterForAttributeSelector$startsWith.prototype = Object.create(CssParameterForAttributeSelector.prototype);
  CssParameterForAttributeSelector$startsWith.prototype.constructor = CssParameterForAttributeSelector$startsWith;
  CssParameterForAttributeSelector$endsWith.prototype = Object.create(CssParameterForAttributeSelector.prototype);
  CssParameterForAttributeSelector$endsWith.prototype.constructor = CssParameterForAttributeSelector$endsWith;
  CssParameterForAttributeSelector$contains.prototype = Object.create(CssParameterForAttributeSelector.prototype);
  CssParameterForAttributeSelector$contains.prototype.constructor = CssParameterForAttributeSelector$contains;
  SelectorCombiner$BinaryCombinator.prototype = Object.create(SelectorCombiner.prototype);
  SelectorCombiner$BinaryCombinator.prototype.constructor = SelectorCombiner$BinaryCombinator;
  SelectorCombiner$either.prototype = Object.create(SelectorCombiner$BinaryCombinator.prototype);
  SelectorCombiner$either.prototype.constructor = SelectorCombiner$either;
  SelectorCombiner$container.prototype = Object.create(SelectorCombiner$BinaryCombinator.prototype);
  SelectorCombiner$container.prototype.constructor = SelectorCombiner$container;
  SelectorCombiner$sibling.prototype = Object.create(SelectorCombiner$BinaryCombinator.prototype);
  SelectorCombiner$sibling.prototype.constructor = SelectorCombiner$sibling;
  SelectorCombiner$immediateSibling.prototype = Object.create(SelectorCombiner$BinaryCombinator.prototype);
  SelectorCombiner$immediateSibling.prototype.constructor = SelectorCombiner$immediateSibling;
  function AnyCssSelector() {
  }
  AnyCssSelector.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AnyCssSelector',
    interfaces: []
  };
  function CssHtmlAttribute() {
  }
  Object.defineProperty(CssHtmlAttribute.prototype, 'cssSelectorString', {
    get: function () {
      return '[' + this.htmlAttributeName + ']';
    }
  });
  CssHtmlAttribute.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CssHtmlAttribute',
    interfaces: [AnyCssSelector]
  };
  function CssHtmlAttributeWithValue() {
  }
  CssHtmlAttributeWithValue.prototype.cssSelectorString_l00mf7$ = function (parameter) {
    return '[' + this.htmlAttributeName + parameter.operator + '"' + parameter.parameterText + '"' + (parameter.caseInsensitive ? ' i' : '') + ']';
  };
  CssHtmlAttributeWithValue.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CssHtmlAttributeWithValue',
    interfaces: [CssHtmlAttribute]
  };
  function CssParameterForAttributeSelector(parameterText, caseInsensitive) {
    this.parameterText = parameterText;
    this.caseInsensitive = caseInsensitive;
  }
  function CssParameterForAttributeSelector$exactly(parameterText, caseInsensitive) {
    if (caseInsensitive === void 0)
      caseInsensitive = false;
    CssParameterForAttributeSelector.call(this, parameterText, caseInsensitive);
  }
  CssParameterForAttributeSelector$exactly.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'exactly',
    interfaces: [CssParameterForAttributeSelector]
  };
  function CssParameterForAttributeSelector$listContainsExactly(listItem, caseInsensitive) {
    if (caseInsensitive === void 0)
      caseInsensitive = false;
    CssParameterForAttributeSelector.call(this, listItem, caseInsensitive);
  }
  CssParameterForAttributeSelector$listContainsExactly.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'listContainsExactly',
    interfaces: [CssParameterForAttributeSelector]
  };
  function CssParameterForAttributeSelector$languageSubCode(subCode, caseInsensitive) {
    if (caseInsensitive === void 0)
      caseInsensitive = false;
    CssParameterForAttributeSelector.call(this, subCode, caseInsensitive);
  }
  CssParameterForAttributeSelector$languageSubCode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'languageSubCode',
    interfaces: [CssParameterForAttributeSelector]
  };
  function CssParameterForAttributeSelector$startsWith(prefix, caseInsensitive) {
    if (caseInsensitive === void 0)
      caseInsensitive = false;
    CssParameterForAttributeSelector.call(this, prefix, caseInsensitive);
  }
  CssParameterForAttributeSelector$startsWith.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'startsWith',
    interfaces: [CssParameterForAttributeSelector]
  };
  function CssParameterForAttributeSelector$endsWith(suffix, caseInsensitive) {
    if (caseInsensitive === void 0)
      caseInsensitive = false;
    CssParameterForAttributeSelector.call(this, suffix, caseInsensitive);
  }
  CssParameterForAttributeSelector$endsWith.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'endsWith',
    interfaces: [CssParameterForAttributeSelector]
  };
  function CssParameterForAttributeSelector$contains(needle, caseInsensitive) {
    if (caseInsensitive === void 0)
      caseInsensitive = false;
    CssParameterForAttributeSelector.call(this, needle, caseInsensitive);
  }
  CssParameterForAttributeSelector$contains.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'contains',
    interfaces: [CssParameterForAttributeSelector]
  };
  Object.defineProperty(CssParameterForAttributeSelector.prototype, 'operator', {
    get: function () {
      var tmp$;
      if (Kotlin.isType(this, CssParameterForAttributeSelector$exactly))
        tmp$ = '';
      else if (Kotlin.isType(this, CssParameterForAttributeSelector$listContainsExactly))
        tmp$ = '~';
      else if (Kotlin.isType(this, CssParameterForAttributeSelector$languageSubCode))
        tmp$ = '|';
      else if (Kotlin.isType(this, CssParameterForAttributeSelector$startsWith))
        tmp$ = '^';
      else if (Kotlin.isType(this, CssParameterForAttributeSelector$endsWith))
        tmp$ = '$';
      else if (Kotlin.isType(this, CssParameterForAttributeSelector$contains))
        tmp$ = '*';
      else
        tmp$ = Kotlin.noWhenBranchMatched();
      return tmp$ + '=';
    }
  });
  CssParameterForAttributeSelector.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CssParameterForAttributeSelector',
    interfaces: []
  };
  function CssElement(elementName) {
    this.elementName = elementName;
  }
  Object.defineProperty(CssElement.prototype, 'cssSelectorString', {
    get: function () {
      return this.elementName;
    }
  });
  CssElement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CssElement',
    interfaces: [AnyCssSelector]
  };
  function CssClass(className) {
    this.className = className;
    this.htmlAttributeName_kt044$_0 = lazy(CssClass$htmlAttributeName$lambda);
    this.cssSelectorString_tsx1sb$_0 = lazy(CssClass$cssSelectorString$lambda(this));
  }
  Object.defineProperty(CssClass.prototype, 'htmlAttributeName', {
    get: function () {
      return this.htmlAttributeName_kt044$_0.value;
    }
  });
  Object.defineProperty(CssClass.prototype, 'cssSelectorString', {
    get: function () {
      return this.cssSelectorString_tsx1sb$_0.value;
    }
  });
  function CssClass$htmlAttributeName$lambda() {
    return 'class';
  }
  function CssClass$cssSelectorString$lambda(this$CssClass) {
    return function () {
      return '.' + this$CssClass.className;
    };
  }
  CssClass.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CssClass',
    interfaces: [CssHtmlAttribute]
  };
  function CssId(idName) {
    this.idName = idName;
    this.htmlAttributeName_9eu4xz$_0 = lazy(CssId$htmlAttributeName$lambda);
    this.cssSelectorString_we5vcy$_0 = lazy(CssId$cssSelectorString$lambda(this));
  }
  Object.defineProperty(CssId.prototype, 'htmlAttributeName', {
    get: function () {
      return this.htmlAttributeName_9eu4xz$_0.value;
    }
  });
  Object.defineProperty(CssId.prototype, 'cssSelectorString', {
    get: function () {
      return this.cssSelectorString_we5vcy$_0.value;
    }
  });
  function CssId$htmlAttributeName$lambda() {
    return 'id';
  }
  function CssId$cssSelectorString$lambda(this$CssId) {
    return function () {
      return '#' + this$CssId.idName;
    };
  }
  CssId.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CssId',
    interfaces: [CssHtmlAttribute]
  };
  function DataAttribute(dataName) {
    this.dataName = dataName;
    this.htmlAttributeName_4fu351$_0 = lazy(DataAttribute$htmlAttributeName$lambda(this));
  }
  Object.defineProperty(DataAttribute.prototype, 'htmlAttributeName', {
    get: function () {
      return this.htmlAttributeName_4fu351$_0.value;
    }
  });
  function DataAttribute$htmlAttributeName$lambda(this$DataAttribute) {
    return function () {
      return 'data-' + this$DataAttribute.dataName;
    };
  }
  DataAttribute.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DataAttribute',
    interfaces: [CssHtmlAttributeWithValue]
  };
  function SelectorCombiner(lhs, rhs, cssStringifier) {
    this.lhs = lhs;
    this.rhs = rhs;
    this.cssStringifier = cssStringifier;
  }
  Object.defineProperty(SelectorCombiner.prototype, 'cssSelectorString', {
    get: function () {
      return this.cssStringifier();
    }
  });
  function SelectorCombiner$BinaryCombinator(lhs, rhs, combinator) {
    SelectorCombiner.call(this, lhs, rhs, SelectorCombiner$SelectorCombiner$BinaryCombinator_init$lambda(lhs, combinator, rhs));
  }
  function SelectorCombiner$SelectorCombiner$BinaryCombinator_init$lambda(closure$lhs, closure$combinator, closure$rhs) {
    return function () {
      return closure$lhs.cssSelectorString + closure$combinator + closure$rhs.cssSelectorString;
    };
  }
  SelectorCombiner$BinaryCombinator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BinaryCombinator',
    interfaces: [SelectorCombiner]
  };
  function SelectorCombiner$either(lhs, rhs) {
    SelectorCombiner$BinaryCombinator.call(this, lhs, rhs, ',');
  }
  SelectorCombiner$either.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'either',
    interfaces: [SelectorCombiner$BinaryCombinator]
  };
  function SelectorCombiner$container(parent, child) {
    SelectorCombiner$BinaryCombinator.call(this, parent, child, '>');
  }
  SelectorCombiner$container.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'container',
    interfaces: [SelectorCombiner$BinaryCombinator]
  };
  function SelectorCombiner$sibling(sister, brother) {
    SelectorCombiner$BinaryCombinator.call(this, sister, brother, '~');
  }
  SelectorCombiner$sibling.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'sibling',
    interfaces: [SelectorCombiner$BinaryCombinator]
  };
  function SelectorCombiner$immediateSibling(sister, brother) {
    SelectorCombiner$BinaryCombinator.call(this, sister, brother, '+');
  }
  SelectorCombiner$immediateSibling.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'immediateSibling',
    interfaces: [SelectorCombiner$BinaryCombinator]
  };
  SelectorCombiner.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SelectorCombiner',
    interfaces: [AnyCssSelector]
  };
  var or = defineInlineFunction('jQuery-For-Kotlin-JS.css.or_sk3okx$', wrapFunction(function () {
    var SelectorCombiner$SelectorCombiner$either_init = _.css.SelectorCombiner.either;
    return function ($receiver, rhs) {
      return new SelectorCombiner$SelectorCombiner$either_init($receiver, rhs);
    };
  }));
  var containing = defineInlineFunction('jQuery-For-Kotlin-JS.css.containing_sk3okx$', wrapFunction(function () {
    var SelectorCombiner$SelectorCombiner$container_init = _.css.SelectorCombiner.container;
    return function ($receiver, child) {
      return new SelectorCombiner$SelectorCombiner$container_init($receiver, child);
    };
  }));
  var justBefore = defineInlineFunction('jQuery-For-Kotlin-JS.css.justBefore_sk3okx$', wrapFunction(function () {
    var SelectorCombiner$SelectorCombiner$immediateSibling_init = _.css.SelectorCombiner.immediateSibling;
    return function ($receiver, brother) {
      return new SelectorCombiner$SelectorCombiner$immediateSibling_init($receiver, brother);
    };
  }));
  var before = defineInlineFunction('jQuery-For-Kotlin-JS.css.before_sk3okx$', wrapFunction(function () {
    var SelectorCombiner$SelectorCombiner$sibling_init = _.css.SelectorCombiner.sibling;
    return function ($receiver, brother) {
      return new SelectorCombiner$SelectorCombiner$sibling_init($receiver, brother);
    };
  }));
  var asList = defineInlineFunction('jQuery-For-Kotlin-JS.jQueryInterface.asList_9ufosi$', wrapFunction(function () {
    var asList = Kotlin.kotlin.collections.asList_us0mfu$;
    return function ($receiver) {
      return asList($receiver.toArray());
    };
  }));
  function mapNotNull$lambda(closure$mapper, closure$newArray) {
    return function (index, element) {
      var mapped = closure$mapper(index, element);
      if (mapped != null) {
        closure$newArray.v = closure$newArray.v.concat([mapped]);
      }
      return Unit;
    };
  }
  function mapNotNull($receiver, mapper) {
    var newArray = {v: []};
    forEachIndexed($receiver, mapNotNull$lambda(mapper, newArray));
    return newArray.v;
  }
  function iterator$ObjectLiteral(this$iterator) {
    this.this$iterator = this$iterator;
    this.iteratorIndex = 0;
  }
  iterator$ObjectLiteral.prototype.hasNext = function () {
    return this.iteratorIndex < this.this$iterator.length;
  };
  iterator$ObjectLiteral.prototype.next = function () {
    var next = this.this$iterator.get(this.iteratorIndex);
    this.iteratorIndex = this.iteratorIndex + 1 | 0;
    return next;
  };
  iterator$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Iterator]
  };
  function iterator($receiver) {
    if ($receiver.length === 0) {
      return Kotlin.arrayIterator([]);
    }
    return new iterator$ObjectLiteral($receiver);
  }
  function forEach($receiver, iterator_0) {
    var tmp$;
    tmp$ = iterator($receiver);
    while (tmp$.hasNext()) {
      var it = tmp$.next();
      iterator_0(it);
    }
  }
  function forEachIndexed($receiver, iterator_0) {
    var tmp$;
    var index = 0;
    tmp$ = iterator($receiver);
    while (tmp$.hasNext()) {
      var it = tmp$.next();
      iterator_0(index, it);
      index = index + 1 | 0;
    }
  }
  function toBooleanOrNull($receiver) {
    if (typeof $receiver === 'boolean')
      return $receiver;
    else if (typeof $receiver === 'string') {
      if ($receiver.length === 0)
        return null;
      else {
        switch ($receiver.toLowerCase()) {
          case 'true':
          case 't':
          case 'yes':
          case 'y':
          case '1':
          case 'on':
            return true;
          case 'false':
          case 'f':
          case 'no':
          case 'n':
          case '0':
          case 'off':
            return false;
          default:return null;
        }
      }
    }
     else if (typeof $receiver === 'number') {
      switch ($receiver) {
        case 0:
          return false;
        case 1:
          return true;
        default:return null;
      }
    }
     else
      return null;
  }
  var booleanAttr = defineInlineFunction('jQuery-For-Kotlin-JS.jQueryInterface.booleanAttr_pl09c0$', wrapFunction(function () {
    var toBooleanOrNull = _.jQueryInterface.toBooleanOrNull_s8jyvk$;
    return function ($receiver, name) {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = $receiver.prop(name)) != null ? toBooleanOrNull(tmp$) : null) != null ? tmp$_0 : false;
    };
  }));
  function booleanAttr_0($receiver, name, newValue) {
    var tmp$, tmp$_0;
    if (newValue === true) {
      tmp$_0 = $receiver.prop(name, name);
    }
     else {
      $receiver.prop(name, (tmp$ = null) == null || typeof tmp$ === 'string' ? tmp$ : throwCCE());
      tmp$_0 = $receiver.removeProp(name);
    }
    return tmp$_0;
  }
  var disabled = defineInlineFunction('jQuery-For-Kotlin-JS.jQueryInterface.disabled_9ufosi$', wrapFunction(function () {
    var toBooleanOrNull = _.jQueryInterface.toBooleanOrNull_s8jyvk$;
    return function ($receiver) {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = $receiver.prop('disabled')) != null ? toBooleanOrNull(tmp$) : null) != null ? tmp$_0 : false;
    };
  }));
  var disabled_0 = defineInlineFunction('jQuery-For-Kotlin-JS.jQueryInterface.disabled_5laha2$', wrapFunction(function () {
    var booleanAttr = _.jQueryInterface.booleanAttr_86h6l4$;
    return function ($receiver, newValue) {
      return booleanAttr($receiver, 'disabled', newValue);
    };
  }));
  var checked = defineInlineFunction('jQuery-For-Kotlin-JS.jQueryInterface.checked_9ufosi$', wrapFunction(function () {
    var toBooleanOrNull = _.jQueryInterface.toBooleanOrNull_s8jyvk$;
    return function ($receiver) {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = $receiver.prop('checked')) != null ? toBooleanOrNull(tmp$) : null) != null ? tmp$_0 : false;
    };
  }));
  function checked_0($receiver, newValue) {
    $receiver.prop('indeterminate', false);
    return booleanAttr_0($receiver, 'checked', newValue);
  }
  var indeterminate = defineInlineFunction('jQuery-For-Kotlin-JS.jQueryInterface.indeterminate_9ufosi$', wrapFunction(function () {
    var toBooleanOrNull = _.jQueryInterface.toBooleanOrNull_s8jyvk$;
    return function ($receiver) {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = $receiver.prop('indeterminate')) != null ? toBooleanOrNull(tmp$) : null) != null ? tmp$_0 : false;
    };
  }));
  var indeterminate_0 = defineInlineFunction('jQuery-For-Kotlin-JS.jQueryInterface.indeterminate_5laha2$', function ($receiver, newValue) {
    return $receiver.prop('indeterminate', newValue);
  });
  var checkedNotIndeterminate = defineInlineFunction('jQuery-For-Kotlin-JS.jQueryInterface.checkedNotIndeterminate_9ufosi$', wrapFunction(function () {
    var toBooleanOrNull = _.jQueryInterface.toBooleanOrNull_s8jyvk$;
    return function ($receiver) {
      var tmp$, tmp$_0;
      var tmp$_1 = (tmp$_0 = (tmp$ = $receiver.prop('checked')) != null ? toBooleanOrNull(tmp$) : null) != null ? tmp$_0 : false;
      if (tmp$_1) {
        var tmp$_2, tmp$_3;
        tmp$_1 = !((tmp$_3 = (tmp$_2 = $receiver.prop('indeterminate')) != null ? toBooleanOrNull(tmp$_2) : null) != null ? tmp$_3 : false);
      }
      return tmp$_1;
    };
  }));
  var jq = defineInlineFunction('jQuery-For-Kotlin-JS.jQueryInterface.jq_dy8zdr$', wrapFunction(function () {
    var jq = $;
    return function (cssSelector) {
      return jq(cssSelector.cssSelectorString);
    };
  }));
  var jq_0 = defineInlineFunction('jQuery-For-Kotlin-JS.jQueryInterface.jq_93xirw$', wrapFunction(function () {
    var jq = $;
    return function (cssSelector, context) {
      return jq(cssSelector.cssSelectorString, context);
    };
  }));
  var jq_1 = defineInlineFunction('jQuery-For-Kotlin-JS.jQueryInterface.jq_k466o4$', wrapFunction(function () {
    var jq = $;
    return function (cssSelector, context) {
      return jq(cssSelector.cssSelectorString, context);
    };
  }));
  var jq_2 = defineInlineFunction('jQuery-For-Kotlin-JS.jQueryInterface.jq_dc87f0$', wrapFunction(function () {
    var jq = $;
    return function (cssSelector, context) {
      var context_0 = jq(context.cssSelectorString);
      return jq(cssSelector.cssSelectorString, context_0);
    };
  }));
  var get_jq = defineInlineFunction('jQuery-For-Kotlin-JS.jQueryInterface.get_jq_6b24ya$', wrapFunction(function () {
    var jq = $;
    return function ($receiver) {
      return jq($receiver.cssSelectorString);
    };
  }));
  var addClass = defineInlineFunction('jQuery-For-Kotlin-JS.jQueryInterface.addClass_ed1zz6$', function ($receiver, class_0) {
    return $receiver.addClass(class_0.className);
  });
  var removeClass = defineInlineFunction('jQuery-For-Kotlin-JS.jQueryInterface.removeClass_ed1zz6$', function ($receiver, class_0) {
    return $receiver.removeClass(class_0.className);
  });
  var data = defineInlineFunction('jQuery-For-Kotlin-JS.jQueryInterface.data_9r2lrr$', function ($receiver, data) {
    return $receiver.data(data.dataName);
  });
  var data_0 = defineInlineFunction('jQuery-For-Kotlin-JS.jQueryInterface.data_wkzpyb$', function ($receiver, data, value) {
    return $receiver.data(data.dataName, value);
  });
  var attr = defineInlineFunction('jQuery-For-Kotlin-JS.jQueryInterface.attr_eunhd5$', function ($receiver, attribute) {
    return $receiver.attr(attribute.htmlAttributeName);
  });
  var attr_0 = defineInlineFunction('jQuery-For-Kotlin-JS.jQueryInterface.attr_y0lh3l$', function ($receiver, attribute, value) {
    return $receiver.attr(attribute.htmlAttributeName, value);
  });
  var attr_1 = defineInlineFunction('jQuery-For-Kotlin-JS.jQueryInterface.attr_scezcm$', function ($receiver, attribute, value) {
    return $receiver.attr(attribute.htmlAttributeName, value);
  });
  var attr_2 = defineInlineFunction('jQuery-For-Kotlin-JS.jQueryInterface.attr_xadqkq$', function ($receiver, attribute, value) {
    return $receiver.attr(attribute.htmlAttributeName, value);
  });
  var onChangeData = defineInlineFunction('jQuery-For-Kotlin-JS.jQueryInterface.onChangeData_x0svav$', function ($receiver, action) {
    $receiver.on('changeData', void 0, action);
  });
  var get_parentElement = defineInlineFunction('jQuery-For-Kotlin-JS.jQueryInterface.get_parentElement_s15u7w$', function ($receiver) {
    return $receiver.parentElement;
  });
  var package$css = _.css || (_.css = {});
  package$css.AnyCssSelector = AnyCssSelector;
  package$css.CssHtmlAttribute = CssHtmlAttribute;
  package$css.CssHtmlAttributeWithValue = CssHtmlAttributeWithValue;
  CssParameterForAttributeSelector.exactly = CssParameterForAttributeSelector$exactly;
  CssParameterForAttributeSelector.listContainsExactly = CssParameterForAttributeSelector$listContainsExactly;
  CssParameterForAttributeSelector.languageSubCode = CssParameterForAttributeSelector$languageSubCode;
  CssParameterForAttributeSelector.startsWith = CssParameterForAttributeSelector$startsWith;
  CssParameterForAttributeSelector.endsWith = CssParameterForAttributeSelector$endsWith;
  CssParameterForAttributeSelector.contains = CssParameterForAttributeSelector$contains;
  package$css.CssParameterForAttributeSelector = CssParameterForAttributeSelector;
  package$css.CssElement = CssElement;
  package$css.CssClass = CssClass;
  package$css.CssId = CssId;
  package$css.DataAttribute = DataAttribute;
  SelectorCombiner.BinaryCombinator = SelectorCombiner$BinaryCombinator;
  SelectorCombiner.either = SelectorCombiner$either;
  SelectorCombiner.container = SelectorCombiner$container;
  SelectorCombiner.sibling = SelectorCombiner$sibling;
  SelectorCombiner.immediateSibling = SelectorCombiner$immediateSibling;
  package$css.SelectorCombiner = SelectorCombiner;
  package$css.or_sk3okx$ = or;
  package$css.containing_sk3okx$ = containing;
  package$css.justBefore_sk3okx$ = justBefore;
  package$css.before_sk3okx$ = before;
  var package$jQueryInterface = _.jQueryInterface || (_.jQueryInterface = {});
  package$jQueryInterface.asList_9ufosi$ = asList;
  package$jQueryInterface.mapNotNull_fo801r$ = mapNotNull;
  package$jQueryInterface.iterator_9ufosi$ = iterator;
  package$jQueryInterface.forEach_f8zjg0$ = forEach;
  package$jQueryInterface.forEachIndexed_53xvis$ = forEachIndexed;
  package$jQueryInterface.toBooleanOrNull_s8jyvk$ = toBooleanOrNull;
  package$jQueryInterface.booleanAttr_pl09c0$ = booleanAttr;
  package$jQueryInterface.booleanAttr_86h6l4$ = booleanAttr_0;
  $$importsForInline$$['jQuery-For-Kotlin-JS'] = _;
  package$jQueryInterface.disabled_9ufosi$ = disabled;
  package$jQueryInterface.disabled_5laha2$ = disabled_0;
  package$jQueryInterface.checked_9ufosi$ = checked;
  package$jQueryInterface.checked_5laha2$ = checked_0;
  package$jQueryInterface.indeterminate_9ufosi$ = indeterminate;
  package$jQueryInterface.indeterminate_5laha2$ = indeterminate_0;
  package$jQueryInterface.checkedNotIndeterminate_9ufosi$ = checkedNotIndeterminate;
  package$jQueryInterface.jq_dy8zdr$ = jq;
  package$jQueryInterface.jq_93xirw$ = jq_0;
  package$jQueryInterface.jq_k466o4$ = jq_1;
  package$jQueryInterface.get_jq_6b24ya$ = get_jq;
  package$jQueryInterface.jq_dc87f0$ = jq_2;
  package$jQueryInterface.addClass_ed1zz6$ = addClass;
  package$jQueryInterface.removeClass_ed1zz6$ = removeClass;
  package$jQueryInterface.data_9r2lrr$ = data;
  package$jQueryInterface.data_wkzpyb$ = data_0;
  package$jQueryInterface.attr_eunhd5$ = attr;
  package$jQueryInterface.attr_y0lh3l$ = attr_0;
  package$jQueryInterface.attr_scezcm$ = attr_1;
  package$jQueryInterface.attr_xadqkq$ = attr_2;
  package$jQueryInterface.onChangeData_x0svav$ = onChangeData;
  package$jQueryInterface.get_parentElement_s15u7w$ = get_parentElement;
  Object.defineProperty(CssHtmlAttributeWithValue.prototype, 'cssSelectorString', Object.getOwnPropertyDescriptor(CssHtmlAttribute.prototype, 'cssSelectorString'));
  DataAttribute.prototype.cssSelectorString_l00mf7$ = CssHtmlAttributeWithValue.prototype.cssSelectorString_l00mf7$;
  Object.defineProperty(DataAttribute.prototype, 'cssSelectorString', Object.getOwnPropertyDescriptor(CssHtmlAttributeWithValue.prototype, 'cssSelectorString'));
  Kotlin.defineModule('jQuery-For-Kotlin-JS', _);
  return _;
}(typeof this['jQuery-For-Kotlin-JS'] === 'undefined' ? {} : this['jQuery-For-Kotlin-JS'], kotlin);

//# sourceMappingURL=jQuery-For-Kotlin-JS.js.map
