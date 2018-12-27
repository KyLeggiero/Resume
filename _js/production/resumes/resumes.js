if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'resumes'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'resumes'.");
}
var resumes = function (_, Kotlin) {
  'use strict';
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var KotlinVersion = Kotlin.kotlin.KotlinVersion;
  var Unit = Kotlin.kotlin.Unit;
  var plus = Kotlin.kotlin.collections.plus_xfiyik$;
  var plus_0 = Kotlin.kotlin.collections.plus_khz7k3$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_us0mfu$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var equals = Kotlin.equals;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_7wnvza$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  RésuméPageState$placeholder.prototype = Object.create(RésuméPageState.prototype);
  RésuméPageState$placeholder.prototype.constructor = RésuméPageState$placeholder;
  RésuméPageState$portal.prototype = Object.create(RésuméPageState.prototype);
  RésuméPageState$portal.prototype.constructor = RésuméPageState$portal;
  RésuméPageState$résumé.prototype = Object.create(RésuméPageState.prototype);
  RésuméPageState$résumé.prototype.constructor = RésuméPageState$résumé;
  BasicRésuméJson$Content$Job$Position$Compensation$Type.prototype = Object.create(Enum.prototype);
  BasicRésuméJson$Content$Job$Position$Compensation$Type.prototype.constructor = BasicRésuméJson$Content$Job$Position$Compensation$Type;
  BasicRésuméJson$Content$Job$Position$Compensation$Tier.prototype = Object.create(Enum.prototype);
  BasicRésuméJson$Content$Job$Position$Compensation$Tier.prototype.constructor = BasicRésuméJson$Content$Job$Position$Compensation$Tier;
  RésuméFilterJson$RecursiveFilter$Inclusion.prototype = Object.create(Enum.prototype);
  RésuméFilterJson$RecursiveFilter$Inclusion.prototype.constructor = RésuméFilterJson$RecursiveFilter$Inclusion;
  RésuméFilterJson$RecursiveFilter$Criterion$Scope.prototype = Object.create(Enum.prototype);
  RésuméFilterJson$RecursiveFilter$Criterion$Scope.prototype.constructor = RésuméFilterJson$RecursiveFilter$Criterion$Scope;
  RésuméFilterJson$RecursiveFilter$Criterion$Type.prototype = Object.create(Enum.prototype);
  RésuméFilterJson$RecursiveFilter$Criterion$Type.prototype.constructor = RésuméFilterJson$RecursiveFilter$Criterion$Type;
  var kotlinVersionRegex;
  function invoke($receiver, jsonString) {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$_0 = (tmp$ = kotlinVersionRegex.find_905azu$(jsonString)) != null ? tmp$.groupValues : null) != null) {
      var tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
      tmp$_3 = (tmp$_2 = getOrNull(tmp$_0, 1)) != null ? toInt(tmp$_2) : null;
      if (tmp$_3 == null) {
        return null;
      }
      tmp$_5 = (tmp$_4 = getOrNull(tmp$_0, 2)) != null ? toInt(tmp$_4) : null;
      if (tmp$_5 == null) {
        return null;
      }
      tmp$_1 = new KotlinVersion(tmp$_3, tmp$_5, (tmp$_7 = (tmp$_6 = getOrNull(tmp$_0, 3)) != null ? toInt(tmp$_6) : null) != null ? tmp$_7 : 0);
    }
     else
      tmp$_1 = null;
    return tmp$_1;
  }
  var allResourcePaths;
  var cachedPortal;
  function main$lambda$refreshPage(closure$renderer) {
    return function () {
      closure$renderer.refreshPage_ngqhws$(RésuméPageState$Companion_getInstance().inferredFromUrl());
    };
  }
  function main$lambda$listenForPageChanges$lambda(closure$refreshPage) {
    return function (it) {
      console.log('Would refresh');
      closure$refreshPage();
      return Unit;
    };
  }
  function main$lambda$listenForPageChanges(closure$refreshPage) {
    return function () {
      $(window).on('hashchange', void 0, main$lambda$listenForPageChanges$lambda(closure$refreshPage));
    };
  }
  function main$lambda$buildPortal(closure$refreshPage) {
    return function (base, filters) {
      var tmp$, tmp$_0;
      tmp$ = RésuméPageState$Companion_getInstance().sharedCache;
      tmp$.bases = plus(tmp$.bases, base);
      tmp$_0 = RésuméPageState$Companion_getInstance().sharedCache;
      tmp$_0.filters = plus_0(tmp$_0.filters, filters);
      closure$refreshPage();
    };
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var wrapFunction = Kotlin.wrapFunction;
  var mapNotNullTo$lambda = wrapFunction(function () {
    return function (closure$transform, closure$destination) {
      return function (element) {
        var tmp$;
        if ((tmp$ = closure$transform(element)) != null) {
          closure$destination.add_11rb$(tmp$);
        }
        return Unit;
      };
    };
  });
  function main$lambda$lambda(closure$buildPortal, closure$listenForPageChanges) {
    return function (jsons) {
      var resumeBasic = BasicRésuméJson$Companion_getInstance().invoke_qk3xy8$(first(jsons));
      if (resumeBasic == null) {
        println('Could not parse basic R\xE9sum\xE9 JSON!');
      }
       else {
        var tmp$ = closure$buildPortal;
        var $receiver = drop(jsons, 1);
        var destination = ArrayList_init();
        var tmp$_0;
        tmp$_0 = $receiver.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          var tmp$_0_0;
          if ((tmp$_0_0 = RésuméFilterJson$Companion_getInstance().invoke_qk3xy8$(element)) != null) {
            destination.add_11rb$(tmp$_0_0);
          }
        }
        tmp$(resumeBasic, destination);
        closure$listenForPageChanges();
      }
      return Unit;
    };
  }
  function main$lambda() {
    $('body').append('<main><h2>Hello there<\/h2><\/main>');
    var renderer = new DynamicRésumePageRenderer($('main').get(0));
    var refreshPage = main$lambda$refreshPage(renderer);
    renderer.refreshPage_ngqhws$(RésuméPageState$placeholder_getInstance());
    var listenForPageChanges = main$lambda$listenForPageChanges(refreshPage);
    var buildPortal = main$lambda$buildPortal(refreshPage);
    fetchAllAsJson(allResourcePaths.slice(), main$lambda$lambda(buildPortal, listenForPageChanges));
    return Unit;
  }
  function main(args) {
    $(main$lambda);
  }
  function fetchAllAsJson(resources, result) {
    resolveAllAsJson(fetchAll(resources.slice()), result);
  }
  function resolveAllAsJson$lambda(it) {
    return toMutableList(it);
  }
  function resolveAllAsJson$lambda$resolveAllResponses$lambda(closure$accumulatedJson, closure$resolveAllResponses) {
    return function (json) {
      var tmp$, tmp$_0;
      tmp$_0 = Kotlin.isType(tmp$ = json, Object) ? tmp$ : null;
      if (tmp$_0 == null) {
        return;
      }
      closure$accumulatedJson.add_11rb$(tmp$_0);
      closure$resolveAllResponses();
      return Unit;
    };
  }
  function resolveAllAsJson$lambda$resolveAllResponses(closure$allResponses, closure$result, closure$accumulatedJson) {
    return function closure$resolveAllResponses() {
      if (closure$allResponses.isEmpty()) {
        closure$result(closure$accumulatedJson);
      }
       else {
        closure$allResponses.removeAt_za3lpa$(0).json().then(resolveAllAsJson$lambda$resolveAllResponses$lambda(closure$accumulatedJson, closure$resolveAllResponses));
      }
    };
  }
  function resolveAllAsJson$lambda_0(closure$result, closure$accumulatedJson) {
    return function (allResponses) {
      var resolveAllResponses = resolveAllAsJson$lambda$resolveAllResponses(allResponses, closure$result, closure$accumulatedJson);
      resolveAllResponses();
      return Unit;
    };
  }
  function resolveAllAsJson(promise, result) {
    var accumulatedJson = ArrayList_init();
    promise.then(resolveAllAsJson$lambda).then(resolveAllAsJson$lambda_0(result, accumulatedJson));
  }
  function RequireJSConfiguration(enforceDefine, paths) {
    this.enforceDefine = enforceDefine;
    this.paths = paths;
  }
  RequireJSConfiguration.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RequireJSConfiguration',
    interfaces: []
  };
  function DynamicRésumePageRenderer(containerElement) {
    this.containerElement = containerElement;
  }
  function DynamicRésumePageRenderer$refreshPage$lambda(closure$state, this$DynamicRésumePageRenderer) {
    return function () {
      this$DynamicRésumePageRenderer.showContent_0(this$DynamicRésumePageRenderer.content_0(closure$state));
      return Unit;
    };
  }
  DynamicRésumePageRenderer.prototype.refreshPage_ngqhws$ = function (state) {
    this.clearPage_0(DynamicRésumePageRenderer$refreshPage$lambda(state, this));
  };
  DynamicRésumePageRenderer.prototype.clearPage_0 = function (then) {
    this.containerElement.innerHTML = '';
    then();
  };
  DynamicRésumePageRenderer.prototype.showContent_0 = function (contentElement) {
    this.containerElement.appendChild(contentElement);
  };
  DynamicRésumePageRenderer.prototype.content_0 = function ($receiver) {
    return this.renderer_0($receiver).renderToHtmlElement();
  };
  DynamicRésumePageRenderer.prototype.renderer_0 = function ($receiver) {
    if (Kotlin.isType($receiver, RésuméPageState$placeholder))
      return résuméPagePlaceholder_getInstance();
    else if (Kotlin.isType($receiver, RésuméPageState$portal))
      return $receiver.portal;
    else if (Kotlin.isType($receiver, RésuméPageState$résumé))
      return $receiver.résumé;
    else
      return Kotlin.noWhenBranchMatched();
  };
  DynamicRésumePageRenderer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicR\xE9sumePageRenderer',
    interfaces: []
  };
  function RésuméPageState() {
    RésuméPageState$Companion_getInstance();
  }
  function RésuméPageState$placeholder() {
    RésuméPageState$placeholder_instance = this;
    RésuméPageState.call(this);
  }
  RésuméPageState$placeholder.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'placeholder',
    interfaces: [RésuméPageState]
  };
  var RésuméPageState$placeholder_instance = null;
  function RésuméPageState$placeholder_getInstance() {
    if (RésuméPageState$placeholder_instance === null) {
      new RésuméPageState$placeholder();
    }
    return RésuméPageState$placeholder_instance;
  }
  function RésuméPageState$portal(portal) {
    RésuméPageState.call(this);
    this.portal = portal;
  }
  RésuméPageState$portal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'portal',
    interfaces: [RésuméPageState]
  };
  function RésuméPageState$résumé(résumé) {
    RésuméPageState.call(this);
    this.résumé = résumé;
  }
  RésuméPageState$résumé.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'r\xE9sum\xE9',
    interfaces: [RésuméPageState]
  };
  function RésuméPageState$Cache(bases, filters) {
    this.bases = bases;
    this.filters = filters;
  }
  RésuméPageState$Cache.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Cache',
    interfaces: []
  };
  RésuméPageState$Cache.prototype.component1 = function () {
    return this.bases;
  };
  RésuméPageState$Cache.prototype.component2 = function () {
    return this.filters;
  };
  RésuméPageState$Cache.prototype.copy_h52uze$ = function (bases, filters) {
    return new RésuméPageState$Cache(bases === void 0 ? this.bases : bases, filters === void 0 ? this.filters : filters);
  };
  RésuméPageState$Cache.prototype.toString = function () {
    return 'Cache(bases=' + Kotlin.toString(this.bases) + (', filters=' + Kotlin.toString(this.filters)) + ')';
  };
  RésuméPageState$Cache.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.bases) | 0;
    result = result * 31 + Kotlin.hashCode(this.filters) | 0;
    return result;
  };
  RésuméPageState$Cache.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.bases, other.bases) && Kotlin.equals(this.filters, other.filters)))));
  };
  function RésuméPageState$Companion() {
    RésuméPageState$Companion_instance = this;
    this.sharedCache = new RésuméPageState$Cache(emptySet(), emptySet());
  }
  RésuméPageState$Companion.prototype.inferredFromUrl = function () {
    var meaning = UrlParser_getInstance().parse_h13imq$(window.location);
    if (meaning.currentBaseRésuméId != null && meaning.currentRésuméFilterId != null) {
      var $receiver = this.sharedCache.bases;
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (equals(element.meta.id, meaning.currentBaseRésuméId)) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }
        }
        firstOrNull$result = null;
      }
       while (false);
      var cachedBaseMatch = firstOrNull$result;
      var $receiver_0 = this.sharedCache.filters;
      var firstOrNull$result_0;
      firstOrNull$break: do {
        var tmp$_0;
        tmp$_0 = $receiver_0.iterator();
        while (tmp$_0.hasNext()) {
          var element_0 = tmp$_0.next();
          if (equals(element_0.meta.id, meaning.currentRésuméFilterId)) {
            firstOrNull$result_0 = element_0;
            break firstOrNull$break;
          }
        }
        firstOrNull$result_0 = null;
      }
       while (false);
      var cachedFilterMatch = firstOrNull$result_0;
      if (cachedBaseMatch != null && cachedFilterMatch != null) {
        return new RésuméPageState$résumé(Résumé$Companion_getInstance().invoke_pzjc5w$(cachedBaseMatch, cachedFilterMatch));
      }
    }
    var firstCachedBase = firstOrNull(this.sharedCache.bases);
    if (firstCachedBase != null) {
      var filters = this.sharedCache.filters;
      if (!filters.isEmpty()) {
        return new RésuméPageState$portal(RésuméPortal$Companion_getInstance().invoke_7fgr4n$(firstCachedBase, toList(this.sharedCache.filters)));
      }
    }
    return RésuméPageState$placeholder_getInstance();
  };
  RésuméPageState$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RésuméPageState$Companion_instance = null;
  function RésuméPageState$Companion_getInstance() {
    if (RésuméPageState$Companion_instance === null) {
      new RésuméPageState$Companion();
    }
    return RésuméPageState$Companion_instance;
  }
  RésuméPageState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'R\xE9sum\xE9PageState',
    interfaces: []
  };
  function Résumé(id, title) {
    Résumé$Companion_getInstance();
    this.id = id;
    this.title = title;
  }
  Résumé.prototype.renderToHtmlElement = function () {
    var article = document.createElement('article');
    var heading = document.createElement('h1');
    heading.textContent = this.title;
    article.appendChild(heading);
    var excuse = document.createElement('aside');
    excuse.textContent = "Pretend there's awesome content here";
    article.appendChild(excuse);
    return article;
  };
  function Résumé$Companion() {
    Résumé$Companion_instance = this;
  }
  Résumé$Companion.prototype.invoke_pzjc5w$ = function (filtering, with_0) {
    var base = filtering;
    var filter = with_0;
    return new Résumé(base.meta.id + '_' + filter.meta.id, filter.meta.title);
  };
  Résumé$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Résumé$Companion_instance = null;
  function Résumé$Companion_getInstance() {
    if (Résumé$Companion_instance === null) {
      new Résumé$Companion();
    }
    return Résumé$Companion_instance;
  }
  Résumé.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'R\xE9sum\xE9',
    interfaces: [HtmlElementRenderable]
  };
  Résumé.prototype.component1 = function () {
    return this.id;
  };
  Résumé.prototype.component2 = function () {
    return this.title;
  };
  Résumé.prototype.copy_puj7f4$ = function (id, title) {
    return new Résumé(id === void 0 ? this.id : id, title === void 0 ? this.title : title);
  };
  Résumé.prototype.toString = function () {
    return 'R\xE9sum\xE9(id=' + Kotlin.toString(this.id) + (', title=' + Kotlin.toString(this.title)) + ')';
  };
  Résumé.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    return result;
  };
  Résumé.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.title, other.title)))));
  };
  function RésuméPortal(résumés) {
    RésuméPortal$Companion_getInstance();
    this.résumés = résumés;
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  RésuméPortal.prototype.renderToHtmlElement = function () {
    var section = document.createElement('section');
    var heading = document.createElement('h2');
    heading.textContent = 'R\xE9sum\xE9s';
    section.appendChild(heading);
    var list = document.createElement('ul');
    addClass(list, ['r\xE9sum\xE9-portal']);
    var $receiver = this.résumés;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(new RésuméPortalItem(item));
    }
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var item_0 = tmp$_0.next();
      destination_0.add_11rb$(item_0.renderToHtmlElement());
    }
    var tmp$_1;
    tmp$_1 = destination_0.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      var listItem = document.createElement('li');
      listItem.appendChild(element);
      list.appendChild(listItem);
    }
    section.appendChild(list);
    return section;
  };
  function RésuméPortal$Companion() {
    RésuméPortal$Companion_instance = this;
  }
  RésuméPortal$Companion.prototype.invoke_7fgr4n$ = function (filtering, with_0) {
    var base = filtering;
    var filters = with_0;
    var destination = ArrayList_init_0(collectionSizeOrDefault(filters, 10));
    var tmp$;
    tmp$ = filters.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(Résumé$Companion_getInstance().invoke_pzjc5w$(base, item));
    }
    return new RésuméPortal(destination);
  };
  RésuméPortal$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RésuméPortal$Companion_instance = null;
  function RésuméPortal$Companion_getInstance() {
    if (RésuméPortal$Companion_instance === null) {
      new RésuméPortal$Companion();
    }
    return RésuméPortal$Companion_instance;
  }
  RésuméPortal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'R\xE9sum\xE9Portal',
    interfaces: [HtmlElementRenderable]
  };
  RésuméPortal.prototype.component1 = function () {
    return this.résumés;
  };
  RésuméPortal.prototype.copy_h6tfkt$ = function (résumés) {
    return new RésuméPortal(résumés === void 0 ? this.résumés : résumés);
  };
  RésuméPortal.prototype.toString = function () {
    return 'R\xE9sum\xE9Portal(r\xE9sum\xE9s=' + Kotlin.toString(this.résumés) + ')';
  };
  RésuméPortal.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.résumés) | 0;
    return result;
  };
  RésuméPortal.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.résumés, other.résumés))));
  };
  function RésuméPortalItem(résumé) {
    this.résumé = résumé;
  }
  RésuméPortalItem.prototype.renderToHtmlElement = function () {
    var tmp$, tmp$_0;
    var anchor = document.createElement('a');
    (tmp$_0 = Kotlin.isType(tmp$ = anchor, HTMLAnchorElement) ? tmp$ : null) != null ? (tmp$_0.href = '#' + this.résumé.id) : null;
    anchor.textContent = this.résumé.title;
    return anchor;
  };
  RésuméPortalItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'R\xE9sum\xE9PortalItem',
    interfaces: [HtmlElementRenderable]
  };
  RésuméPortalItem.prototype.component1 = function () {
    return this.résumé;
  };
  RésuméPortalItem.prototype.copy_kfg9o2$ = function (résumé) {
    return new RésuméPortalItem(résumé === void 0 ? this.résumé : résumé);
  };
  RésuméPortalItem.prototype.toString = function () {
    return 'R\xE9sum\xE9PortalItem(r\xE9sum\xE9=' + Kotlin.toString(this.résumé) + ')';
  };
  RésuméPortalItem.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.résumé) | 0;
    return result;
  };
  RésuméPortalItem.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.résumé, other.résumé))));
  };
  function BasicRésuméJson(meta, content) {
    BasicRésuméJson$Companion_getInstance();
    this.meta = meta;
    this.content = content;
  }
  function BasicRésuméJson$Companion() {
    BasicRésuméJson$Companion_instance = this;
    this.compatibleVersionRegex_0 = Regex_init('1\\.\\d(?:\\.\\d)?');
  }
  BasicRésuméJson$Companion.prototype.invoke_61zpoe$ = function (jsonString) {
    return BasicRésuméJson$Companion_getInstance().invoke_qk3xy8$(JSON.parse(jsonString));
  };
  BasicRésuméJson$Companion.prototype.invoke_qk3xy8$ = function (jsonObject) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    var formatVersion = jsonObject['format-version'];
    if (!(typeof formatVersion === 'string') || !this.compatibleVersionRegex_0.matches_6bul2c$(formatVersion)) {
      println('Incompatible format version');
      return null;
    }
    tmp$_1 = BasicRésuméJson$Meta$Companion_getInstance();
    tmp$_0 = Kotlin.isType(tmp$ = jsonObject['meta'], Object) ? tmp$ : null;
    if (tmp$_0 == null) {
      return null;
    }
    tmp$_2 = tmp$_1.invoke_qk3xy8$(tmp$_0);
    if (tmp$_2 == null) {
      return null;
    }
    tmp$_5 = BasicRésuméJson$Content$Companion_getInstance();
    tmp$_4 = Kotlin.isType(tmp$_3 = jsonObject['content'], Object) ? tmp$_3 : null;
    if (tmp$_4 == null) {
      return null;
    }
    tmp$_6 = tmp$_5.invoke_qk3xy8$(tmp$_4);
    if (tmp$_6 == null) {
      return null;
    }
    return new BasicRésuméJson(tmp$_2, tmp$_6);
  };
  BasicRésuméJson$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BasicRésuméJson$Companion_instance = null;
  function BasicRésuméJson$Companion_getInstance() {
    if (BasicRésuméJson$Companion_instance === null) {
      new BasicRésuméJson$Companion();
    }
    return BasicRésuméJson$Companion_instance;
  }
  function BasicRésuméJson$Meta(id, infoVersion, title) {
    BasicRésuméJson$Meta$Companion_getInstance();
    this.id = id;
    this.infoVersion = infoVersion;
    this.title = title;
  }
  function BasicRésuméJson$Meta$Companion() {
    BasicRésuméJson$Meta$Companion_instance = this;
  }
  BasicRésuméJson$Meta$Companion.prototype.invoke_qk3xy8$ = function (jsonObject) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    tmp$_0 = typeof (tmp$ = jsonObject['id']) === 'string' ? tmp$ : null;
    if (tmp$_0 == null) {
      return null;
    }
    tmp$_3 = KotlinVersion.Companion;
    tmp$_2 = typeof (tmp$_1 = jsonObject['info-version']) === 'string' ? tmp$_1 : null;
    if (tmp$_2 == null) {
      return null;
    }
    tmp$_4 = invoke(tmp$_3, tmp$_2);
    if (tmp$_4 == null) {
      return null;
    }
    tmp$_6 = typeof (tmp$_5 = jsonObject['title']) === 'string' ? tmp$_5 : null;
    if (tmp$_6 == null) {
      return null;
    }
    return new BasicRésuméJson$Meta(tmp$_0, tmp$_4, tmp$_6);
  };
  BasicRésuméJson$Meta$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BasicRésuméJson$Meta$Companion_instance = null;
  function BasicRésuméJson$Meta$Companion_getInstance() {
    if (BasicRésuméJson$Meta$Companion_instance === null) {
      new BasicRésuméJson$Meta$Companion();
    }
    return BasicRésuméJson$Meta$Companion_instance;
  }
  BasicRésuméJson$Meta.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Meta',
    interfaces: []
  };
  BasicRésuméJson$Meta.prototype.component1 = function () {
    return this.id;
  };
  BasicRésuméJson$Meta.prototype.component2 = function () {
    return this.infoVersion;
  };
  BasicRésuméJson$Meta.prototype.component3 = function () {
    return this.title;
  };
  BasicRésuméJson$Meta.prototype.copy_v54qkq$ = function (id, infoVersion, title) {
    return new BasicRésuméJson$Meta(id === void 0 ? this.id : id, infoVersion === void 0 ? this.infoVersion : infoVersion, title === void 0 ? this.title : title);
  };
  BasicRésuméJson$Meta.prototype.toString = function () {
    return 'Meta(id=' + Kotlin.toString(this.id) + (', infoVersion=' + Kotlin.toString(this.infoVersion)) + (', title=' + Kotlin.toString(this.title)) + ')';
  };
  BasicRésuméJson$Meta.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.infoVersion) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    return result;
  };
  BasicRésuméJson$Meta.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.infoVersion, other.infoVersion) && Kotlin.equals(this.title, other.title)))));
  };
  function BasicRésuméJson$Content(contact, workHistory) {
    BasicRésuméJson$Content$Companion_getInstance();
    this.contact = contact;
    this.workHistory = workHistory;
  }
  function BasicRésuméJson$Content$Companion() {
    BasicRésuméJson$Content$Companion_instance = this;
  }
  var mapNotNullTo$lambda_0 = wrapFunction(function () {
    return function (closure$transform, closure$destination) {
      return function (element) {
        var tmp$;
        if ((tmp$ = closure$transform(element)) != null) {
          closure$destination.add_11rb$(tmp$);
        }
        return Unit;
      };
    };
  });
  BasicRésuméJson$Content$Companion.prototype.invoke_qk3xy8$ = function (jsonObject) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    tmp$_1 = BasicRésuméJson$Content$Contact$Companion_getInstance();
    tmp$_0 = Kotlin.isType(tmp$ = jsonObject['contact'], Object) ? tmp$ : null;
    if (tmp$_0 == null) {
      return null;
    }
    tmp$_2 = tmp$_1.invoke_qk3xy8$(tmp$_0);
    if (tmp$_2 == null) {
      return null;
    }
    tmp$_4 = Kotlin.isArray(tmp$_3 = jsonObject['work-history']) ? tmp$_3 : null;
    if (tmp$_4 == null) {
      return null;
    }
    var destination = ArrayList_init();
    var tmp$_5;
    loop_label: for (tmp$_5 = 0; tmp$_5 !== tmp$_4.length; ++tmp$_5) {
      var element = tmp$_4[tmp$_5];
      var tmp$_0_0;
      var transform$result;
      transform$break: do {
        var tmp$_6, tmp$_7, tmp$_8;
        tmp$_8 = BasicRésuméJson$Content$Job$Companion_getInstance();
        tmp$_7 = Kotlin.isType(tmp$_6 = element, Object) ? tmp$_6 : null;
        if (tmp$_7 == null) {
          transform$result = null;
          break transform$break;
        }
        transform$result = tmp$_8.invoke_qk3xy8$(tmp$_7);
      }
       while (false);
      if ((tmp$_0_0 = transform$result) != null) {
        destination.add_11rb$(tmp$_0_0);
      }
    }
    return new BasicRésuméJson$Content(tmp$_2, destination);
  };
  BasicRésuméJson$Content$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BasicRésuméJson$Content$Companion_instance = null;
  function BasicRésuméJson$Content$Companion_getInstance() {
    if (BasicRésuméJson$Content$Companion_instance === null) {
      new BasicRésuméJson$Content$Companion();
    }
    return BasicRésuméJson$Content$Companion_instance;
  }
  function BasicRésuméJson$Content$Contact(fullFirstName, preferredFirstName, middleInitial, lastName, phoneNumber, emailAddress, blogURL) {
    BasicRésuméJson$Content$Contact$Companion_getInstance();
    this.fullFirstName = fullFirstName;
    this.preferredFirstName = preferredFirstName;
    this.middleInitial = middleInitial;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.emailAddress = emailAddress;
    this.blogURL = blogURL;
  }
  function BasicRésuméJson$Content$Contact$Companion() {
    BasicRésuméJson$Content$Contact$Companion_instance = this;
  }
  BasicRésuméJson$Content$Contact$Companion.prototype.invoke_qk3xy8$ = function (jsonObject) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10;
    tmp$_0 = typeof (tmp$ = jsonObject['full-first-name']) === 'string' ? tmp$ : null;
    if (tmp$_0 == null) {
      return null;
    }
    tmp$_2 = typeof (tmp$_1 = jsonObject['preferred-first-name']) === 'string' ? tmp$_1 : null;
    tmp$_4 = typeof (tmp$_3 = jsonObject['middle-initial']) === 'string' ? tmp$_3 : null;
    tmp$_6 = typeof (tmp$_5 = jsonObject['last-name']) === 'string' ? tmp$_5 : null;
    if (tmp$_6 == null) {
      return null;
    }
    return new BasicRésuméJson$Content$Contact(tmp$_0, tmp$_2, tmp$_4, tmp$_6, typeof (tmp$_7 = jsonObject['phone-number']) === 'string' ? tmp$_7 : null, typeof (tmp$_8 = jsonObject['email-address']) === 'string' ? tmp$_8 : null, (tmp$_10 = typeof (tmp$_9 = jsonObject['blog-url']) === 'string' ? tmp$_9 : null) != null ? new URL(tmp$_10) : null);
  };
  BasicRésuméJson$Content$Contact$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BasicRésuméJson$Content$Contact$Companion_instance = null;
  function BasicRésuméJson$Content$Contact$Companion_getInstance() {
    if (BasicRésuméJson$Content$Contact$Companion_instance === null) {
      new BasicRésuméJson$Content$Contact$Companion();
    }
    return BasicRésuméJson$Content$Contact$Companion_instance;
  }
  BasicRésuméJson$Content$Contact.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Contact',
    interfaces: []
  };
  BasicRésuméJson$Content$Contact.prototype.component1 = function () {
    return this.fullFirstName;
  };
  BasicRésuméJson$Content$Contact.prototype.component2 = function () {
    return this.preferredFirstName;
  };
  BasicRésuméJson$Content$Contact.prototype.component3 = function () {
    return this.middleInitial;
  };
  BasicRésuméJson$Content$Contact.prototype.component4 = function () {
    return this.lastName;
  };
  BasicRésuméJson$Content$Contact.prototype.component5 = function () {
    return this.phoneNumber;
  };
  BasicRésuméJson$Content$Contact.prototype.component6 = function () {
    return this.emailAddress;
  };
  BasicRésuméJson$Content$Contact.prototype.component7 = function () {
    return this.blogURL;
  };
  BasicRésuméJson$Content$Contact.prototype.copy_bf7upk$ = function (fullFirstName, preferredFirstName, middleInitial, lastName, phoneNumber, emailAddress, blogURL) {
    return new BasicRésuméJson$Content$Contact(fullFirstName === void 0 ? this.fullFirstName : fullFirstName, preferredFirstName === void 0 ? this.preferredFirstName : preferredFirstName, middleInitial === void 0 ? this.middleInitial : middleInitial, lastName === void 0 ? this.lastName : lastName, phoneNumber === void 0 ? this.phoneNumber : phoneNumber, emailAddress === void 0 ? this.emailAddress : emailAddress, blogURL === void 0 ? this.blogURL : blogURL);
  };
  BasicRésuméJson$Content$Contact.prototype.toString = function () {
    return 'Contact(fullFirstName=' + Kotlin.toString(this.fullFirstName) + (', preferredFirstName=' + Kotlin.toString(this.preferredFirstName)) + (', middleInitial=' + Kotlin.toString(this.middleInitial)) + (', lastName=' + Kotlin.toString(this.lastName)) + (', phoneNumber=' + Kotlin.toString(this.phoneNumber)) + (', emailAddress=' + Kotlin.toString(this.emailAddress)) + (', blogURL=' + Kotlin.toString(this.blogURL)) + ')';
  };
  BasicRésuméJson$Content$Contact.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.fullFirstName) | 0;
    result = result * 31 + Kotlin.hashCode(this.preferredFirstName) | 0;
    result = result * 31 + Kotlin.hashCode(this.middleInitial) | 0;
    result = result * 31 + Kotlin.hashCode(this.lastName) | 0;
    result = result * 31 + Kotlin.hashCode(this.phoneNumber) | 0;
    result = result * 31 + Kotlin.hashCode(this.emailAddress) | 0;
    result = result * 31 + Kotlin.hashCode(this.blogURL) | 0;
    return result;
  };
  BasicRésuméJson$Content$Contact.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.fullFirstName, other.fullFirstName) && Kotlin.equals(this.preferredFirstName, other.preferredFirstName) && Kotlin.equals(this.middleInitial, other.middleInitial) && Kotlin.equals(this.lastName, other.lastName) && Kotlin.equals(this.phoneNumber, other.phoneNumber) && Kotlin.equals(this.emailAddress, other.emailAddress) && Kotlin.equals(this.blogURL, other.blogURL)))));
  };
  function BasicRésuméJson$Content$Job(id, company, start, end, keywords, tags, reasonForLeaving) {
    BasicRésuméJson$Content$Job$Companion_getInstance();
    this.id = id;
    this.company = company;
    this.start = start;
    this.end = end;
    this.keywords = keywords;
    this.tags = tags;
    this.reasonForLeaving = reasonForLeaving;
  }
  function BasicRésuméJson$Content$Job$Companion() {
    BasicRésuméJson$Content$Job$Companion_instance = this;
  }
  var mapNotNullTo$lambda_1 = wrapFunction(function () {
    return function (closure$transform, closure$destination) {
      return function (element) {
        var tmp$;
        if ((tmp$ = closure$transform(element)) != null) {
          closure$destination.add_11rb$(tmp$);
        }
        return Unit;
      };
    };
  });
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var mapNotNullTo$lambda_2 = wrapFunction(function () {
    return function (closure$transform, closure$destination) {
      return function (element) {
        var tmp$;
        if ((tmp$ = closure$transform(element)) != null) {
          closure$destination.add_11rb$(tmp$);
        }
        return Unit;
      };
    };
  });
  BasicRésuméJson$Content$Job$Companion.prototype.invoke_qk3xy8$ = function (jsonObject) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20;
    tmp$_0 = typeof (tmp$ = jsonObject['id']) === 'string' ? tmp$ : null;
    if (tmp$_0 == null) {
      return null;
    }
    tmp$_3 = BasicRésuméJson$Content$Job$Company$Companion_getInstance();
    tmp$_2 = Kotlin.isType(tmp$_1 = jsonObject['company'], Object) ? tmp$_1 : null;
    if (tmp$_2 == null) {
      return null;
    }
    tmp$_4 = tmp$_3.invoke_qk3xy8$(tmp$_2);
    if (tmp$_4 == null) {
      return null;
    }
    tmp$_7 = BasicRésuméJson$Content$Job$Position$Companion_getInstance();
    tmp$_6 = Kotlin.isType(tmp$_5 = jsonObject['start'], Object) ? tmp$_5 : null;
    if (tmp$_6 == null) {
      return null;
    }
    tmp$_8 = tmp$_7.invoke_qk3xy8$(tmp$_6);
    if (tmp$_8 == null) {
      return null;
    }
    tmp$_11 = (tmp$_10 = Kotlin.isType(tmp$_9 = jsonObject['end'], Object) ? tmp$_9 : null) != null ? BasicRésuméJson$Content$Job$Position$Companion_getInstance().invoke_qk3xy8$(tmp$_10) : null;
    var tmp$_21;
    if ((tmp$_13 = Kotlin.isArray(tmp$_12 = jsonObject['keywords']) ? tmp$_12 : null) != null) {
      var destination = ArrayList_init();
      var tmp$_22;
      for (tmp$_22 = 0; tmp$_22 !== tmp$_13.length; ++tmp$_22) {
        var element = tmp$_13[tmp$_22];
        var tmp$_0_0;
        var tmp$_23;
        if ((tmp$_0_0 = typeof (tmp$_23 = element) === 'string' ? tmp$_23 : null) != null) {
          destination.add_11rb$(tmp$_0_0);
        }
      }
      tmp$_21 = destination;
    }
     else
      tmp$_21 = null;
    tmp$_15 = (tmp$_14 = tmp$_21) != null ? tmp$_14 : emptyList();
    var tmp$_24;
    if ((tmp$_17 = Kotlin.isArray(tmp$_16 = jsonObject['tags']) ? tmp$_16 : null) != null) {
      var destination_0 = LinkedHashSet_init();
      var tmp$_25;
      for (tmp$_25 = 0; tmp$_25 !== tmp$_17.length; ++tmp$_25) {
        var element_0 = tmp$_17[tmp$_25];
        var tmp$_0_1;
        var tmp$_26;
        if ((tmp$_0_1 = typeof (tmp$_26 = element_0) === 'string' ? tmp$_26 : null) != null) {
          destination_0.add_11rb$(tmp$_0_1);
        }
      }
      tmp$_24 = destination_0;
    }
     else
      tmp$_24 = null;
    return new BasicRésuméJson$Content$Job(tmp$_0, tmp$_4, tmp$_8, tmp$_11, tmp$_15, (tmp$_18 = tmp$_24) != null ? tmp$_18 : emptySet(), (tmp$_20 = Kotlin.isType(tmp$_19 = jsonObject['reason-for-leaving'], Object) ? tmp$_19 : null) != null ? BasicRésuméJson$Content$Job$ReasonForLeaving$Companion_getInstance().invoke_qk3xy8$(tmp$_20) : null);
  };
  BasicRésuméJson$Content$Job$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BasicRésuméJson$Content$Job$Companion_instance = null;
  function BasicRésuméJson$Content$Job$Companion_getInstance() {
    if (BasicRésuméJson$Content$Job$Companion_instance === null) {
      new BasicRésuméJson$Content$Job$Companion();
    }
    return BasicRésuméJson$Content$Job$Companion_instance;
  }
  function BasicRésuméJson$Content$Job$Company(name, nameLong, division, broadLocation, address, phoneNumber) {
    BasicRésuméJson$Content$Job$Company$Companion_getInstance();
    this.name = name;
    this.nameLong = nameLong;
    this.division = division;
    this.broadLocation = broadLocation;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }
  function BasicRésuméJson$Content$Job$Company$Companion() {
    BasicRésuméJson$Content$Job$Company$Companion_instance = this;
  }
  BasicRésuméJson$Content$Job$Company$Companion.prototype.invoke_qk3xy8$ = function (jsonObject) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9;
    tmp$_0 = typeof (tmp$ = jsonObject['name']) === 'string' ? tmp$ : null;
    if (tmp$_0 == null) {
      return null;
    }
    tmp$_2 = typeof (tmp$_1 = jsonObject['name-long']) === 'string' ? tmp$_1 : null;
    tmp$_4 = typeof (tmp$_3 = jsonObject['division']) === 'string' ? tmp$_3 : null;
    tmp$_6 = typeof (tmp$_5 = jsonObject['broad-location']) === 'string' ? tmp$_5 : null;
    if (tmp$_6 == null) {
      return null;
    }
    tmp$_8 = typeof (tmp$_7 = jsonObject['address']) === 'string' ? tmp$_7 : null;
    if (tmp$_8 == null) {
      return null;
    }
    return new BasicRésuméJson$Content$Job$Company(tmp$_0, tmp$_2, tmp$_4, tmp$_6, tmp$_8, typeof (tmp$_9 = jsonObject['phone-number']) === 'string' ? tmp$_9 : null);
  };
  BasicRésuméJson$Content$Job$Company$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BasicRésuméJson$Content$Job$Company$Companion_instance = null;
  function BasicRésuméJson$Content$Job$Company$Companion_getInstance() {
    if (BasicRésuméJson$Content$Job$Company$Companion_instance === null) {
      new BasicRésuméJson$Content$Job$Company$Companion();
    }
    return BasicRésuméJson$Content$Job$Company$Companion_instance;
  }
  BasicRésuméJson$Content$Job$Company.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Company',
    interfaces: []
  };
  BasicRésuméJson$Content$Job$Company.prototype.component1 = function () {
    return this.name;
  };
  BasicRésuméJson$Content$Job$Company.prototype.component2 = function () {
    return this.nameLong;
  };
  BasicRésuméJson$Content$Job$Company.prototype.component3 = function () {
    return this.division;
  };
  BasicRésuméJson$Content$Job$Company.prototype.component4 = function () {
    return this.broadLocation;
  };
  BasicRésuméJson$Content$Job$Company.prototype.component5 = function () {
    return this.address;
  };
  BasicRésuméJson$Content$Job$Company.prototype.component6 = function () {
    return this.phoneNumber;
  };
  BasicRésuméJson$Content$Job$Company.prototype.copy_anc74l$ = function (name, nameLong, division, broadLocation, address, phoneNumber) {
    return new BasicRésuméJson$Content$Job$Company(name === void 0 ? this.name : name, nameLong === void 0 ? this.nameLong : nameLong, division === void 0 ? this.division : division, broadLocation === void 0 ? this.broadLocation : broadLocation, address === void 0 ? this.address : address, phoneNumber === void 0 ? this.phoneNumber : phoneNumber);
  };
  BasicRésuméJson$Content$Job$Company.prototype.toString = function () {
    return 'Company(name=' + Kotlin.toString(this.name) + (', nameLong=' + Kotlin.toString(this.nameLong)) + (', division=' + Kotlin.toString(this.division)) + (', broadLocation=' + Kotlin.toString(this.broadLocation)) + (', address=' + Kotlin.toString(this.address)) + (', phoneNumber=' + Kotlin.toString(this.phoneNumber)) + ')';
  };
  BasicRésuméJson$Content$Job$Company.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.nameLong) | 0;
    result = result * 31 + Kotlin.hashCode(this.division) | 0;
    result = result * 31 + Kotlin.hashCode(this.broadLocation) | 0;
    result = result * 31 + Kotlin.hashCode(this.address) | 0;
    result = result * 31 + Kotlin.hashCode(this.phoneNumber) | 0;
    return result;
  };
  BasicRésuméJson$Content$Job$Company.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.nameLong, other.nameLong) && Kotlin.equals(this.division, other.division) && Kotlin.equals(this.broadLocation, other.broadLocation) && Kotlin.equals(this.address, other.address) && Kotlin.equals(this.phoneNumber, other.phoneNumber)))));
  };
  function BasicRésuméJson$Content$Job$Position(date, title, description, compensation) {
    BasicRésuméJson$Content$Job$Position$Companion_getInstance();
    this.date = date;
    this.title = title;
    this.description = description;
    this.compensation = compensation;
  }
  function BasicRésuméJson$Content$Job$Position$Companion() {
    BasicRésuméJson$Content$Job$Position$Companion_instance = this;
  }
  BasicRésuméJson$Content$Job$Position$Companion.prototype.invoke_qk3xy8$ = function (jsonObject) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9;
    tmp$_0 = typeof (tmp$ = jsonObject['date']) === 'string' ? tmp$ : null;
    if (tmp$_0 == null) {
      return null;
    }
    tmp$_1 = new Date(tmp$_0);
    tmp$_3 = typeof (tmp$_2 = jsonObject['title']) === 'string' ? tmp$_2 : null;
    tmp$_5 = typeof (tmp$_4 = jsonObject['description']) === 'string' ? tmp$_4 : null;
    tmp$_8 = BasicRésuméJson$Content$Job$Position$Compensation$Companion_getInstance();
    tmp$_7 = Kotlin.isType(tmp$_6 = jsonObject['compensation'], Object) ? tmp$_6 : null;
    if (tmp$_7 == null) {
      return null;
    }
    tmp$_9 = tmp$_8.invoke_qk3xy8$(tmp$_7);
    if (tmp$_9 == null) {
      return null;
    }
    return new BasicRésuméJson$Content$Job$Position(tmp$_1, tmp$_3, tmp$_5, tmp$_9);
  };
  BasicRésuméJson$Content$Job$Position$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BasicRésuméJson$Content$Job$Position$Companion_instance = null;
  function BasicRésuméJson$Content$Job$Position$Companion_getInstance() {
    if (BasicRésuméJson$Content$Job$Position$Companion_instance === null) {
      new BasicRésuméJson$Content$Job$Position$Companion();
    }
    return BasicRésuméJson$Content$Job$Position$Companion_instance;
  }
  function BasicRésuméJson$Content$Job$Position$Compensation(type, amount, tier) {
    BasicRésuméJson$Content$Job$Position$Compensation$Companion_getInstance();
    this.type = type;
    this.amount = amount;
    this.tier = tier;
  }
  function BasicRésuméJson$Content$Job$Position$Compensation$Companion() {
    BasicRésuméJson$Content$Job$Position$Compensation$Companion_instance = this;
  }
  BasicRésuméJson$Content$Job$Position$Compensation$Companion.prototype.invoke_qk3xy8$ = function (jsonObject) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    tmp$_1 = BasicRésuméJson$Content$Job$Position$Compensation$Type$Companion_getInstance();
    tmp$_0 = typeof (tmp$ = jsonObject['type']) === 'string' ? tmp$ : null;
    if (tmp$_0 == null) {
      return null;
    }
    tmp$_2 = tmp$_1.invoke_61zpoe$(tmp$_0);
    if (tmp$_2 == null) {
      return null;
    }
    tmp$_4 = typeof (tmp$_3 = jsonObject['amount']) === 'number' ? tmp$_3 : null;
    if (tmp$_4 == null) {
      return null;
    }
    tmp$_7 = BasicRésuméJson$Content$Job$Position$Compensation$Tier$Companion_getInstance();
    tmp$_6 = typeof (tmp$_5 = jsonObject['tier']) === 'string' ? tmp$_5 : null;
    if (tmp$_6 == null) {
      return null;
    }
    tmp$_8 = tmp$_7.invoke_61zpoe$(tmp$_6);
    if (tmp$_8 == null) {
      return null;
    }
    return new BasicRésuméJson$Content$Job$Position$Compensation(tmp$_2, tmp$_4, tmp$_8);
  };
  BasicRésuméJson$Content$Job$Position$Compensation$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BasicRésuméJson$Content$Job$Position$Compensation$Companion_instance = null;
  function BasicRésuméJson$Content$Job$Position$Compensation$Companion_getInstance() {
    if (BasicRésuméJson$Content$Job$Position$Compensation$Companion_instance === null) {
      new BasicRésuméJson$Content$Job$Position$Compensation$Companion();
    }
    return BasicRésuméJson$Content$Job$Position$Compensation$Companion_instance;
  }
  function BasicRésuméJson$Content$Job$Position$Compensation$Type(name, ordinal, jsonString) {
    Enum.call(this);
    this.jsonString = jsonString;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BasicRésuméJson$Content$Job$Position$Compensation$Type_initFields() {
    BasicRésuméJson$Content$Job$Position$Compensation$Type_initFields = function () {
    };
    BasicRésuméJson$Content$Job$Position$Compensation$Type$hourly_instance = new BasicRésuméJson$Content$Job$Position$Compensation$Type('hourly', 0, 'hourly');
    BasicRésuméJson$Content$Job$Position$Compensation$Type$yearly_instance = new BasicRésuméJson$Content$Job$Position$Compensation$Type('yearly', 1, 'yearly');
    BasicRésuméJson$Content$Job$Position$Compensation$Type$Companion_getInstance();
  }
  var BasicRésuméJson$Content$Job$Position$Compensation$Type$hourly_instance;
  function BasicRésuméJson$Content$Job$Position$Compensation$Type$hourly_getInstance() {
    BasicRésuméJson$Content$Job$Position$Compensation$Type_initFields();
    return BasicRésuméJson$Content$Job$Position$Compensation$Type$hourly_instance;
  }
  var BasicRésuméJson$Content$Job$Position$Compensation$Type$yearly_instance;
  function BasicRésuméJson$Content$Job$Position$Compensation$Type$yearly_getInstance() {
    BasicRésuméJson$Content$Job$Position$Compensation$Type_initFields();
    return BasicRésuméJson$Content$Job$Position$Compensation$Type$yearly_instance;
  }
  function BasicRésuméJson$Content$Job$Position$Compensation$Type$Companion() {
    BasicRésuméJson$Content$Job$Position$Compensation$Type$Companion_instance = this;
  }
  BasicRésuméJson$Content$Job$Position$Compensation$Type$Companion.prototype.invoke_61zpoe$ = function (jsonString) {
    var $receiver = BasicRésuméJson$Content$Job$Position$Compensation$Type$values();
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (equals(element.jsonString, jsonString)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  };
  BasicRésuméJson$Content$Job$Position$Compensation$Type$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BasicRésuméJson$Content$Job$Position$Compensation$Type$Companion_instance = null;
  function BasicRésuméJson$Content$Job$Position$Compensation$Type$Companion_getInstance() {
    BasicRésuméJson$Content$Job$Position$Compensation$Type_initFields();
    if (BasicRésuméJson$Content$Job$Position$Compensation$Type$Companion_instance === null) {
      new BasicRésuméJson$Content$Job$Position$Compensation$Type$Companion();
    }
    return BasicRésuméJson$Content$Job$Position$Compensation$Type$Companion_instance;
  }
  BasicRésuméJson$Content$Job$Position$Compensation$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function BasicRésuméJson$Content$Job$Position$Compensation$Type$values() {
    return [BasicRésuméJson$Content$Job$Position$Compensation$Type$hourly_getInstance(), BasicRésuméJson$Content$Job$Position$Compensation$Type$yearly_getInstance()];
  }
  BasicRésuméJson$Content$Job$Position$Compensation$Type.values = BasicRésuméJson$Content$Job$Position$Compensation$Type$values;
  function BasicRésuméJson$Content$Job$Position$Compensation$Type$valueOf(name) {
    switch (name) {
      case 'hourly':
        return BasicRésuméJson$Content$Job$Position$Compensation$Type$hourly_getInstance();
      case 'yearly':
        return BasicRésuméJson$Content$Job$Position$Compensation$Type$yearly_getInstance();
      default:throwISE('No enum constant R\xE9sum\xE9.BasicR\xE9sum\xE9Json.Content.Job.Position.Compensation.Type.' + name);
    }
  }
  BasicRésuméJson$Content$Job$Position$Compensation$Type.valueOf_61zpoe$ = BasicRésuméJson$Content$Job$Position$Compensation$Type$valueOf;
  function BasicRésuméJson$Content$Job$Position$Compensation$Tier(name, ordinal, jsonString) {
    Enum.call(this);
    this.jsonString = jsonString;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BasicRésuméJson$Content$Job$Position$Compensation$Tier_initFields() {
    BasicRésuméJson$Content$Job$Position$Compensation$Tier_initFields = function () {
    };
    BasicRésuméJson$Content$Job$Position$Compensation$Tier$partTime_instance = new BasicRésuméJson$Content$Job$Position$Compensation$Tier('partTime', 0, 'part-time');
    BasicRésuméJson$Content$Job$Position$Compensation$Tier$fullTime_instance = new BasicRésuméJson$Content$Job$Position$Compensation$Tier('fullTime', 1, 'full-time');
    BasicRésuméJson$Content$Job$Position$Compensation$Tier$Companion_getInstance();
  }
  var BasicRésuméJson$Content$Job$Position$Compensation$Tier$partTime_instance;
  function BasicRésuméJson$Content$Job$Position$Compensation$Tier$partTime_getInstance() {
    BasicRésuméJson$Content$Job$Position$Compensation$Tier_initFields();
    return BasicRésuméJson$Content$Job$Position$Compensation$Tier$partTime_instance;
  }
  var BasicRésuméJson$Content$Job$Position$Compensation$Tier$fullTime_instance;
  function BasicRésuméJson$Content$Job$Position$Compensation$Tier$fullTime_getInstance() {
    BasicRésuméJson$Content$Job$Position$Compensation$Tier_initFields();
    return BasicRésuméJson$Content$Job$Position$Compensation$Tier$fullTime_instance;
  }
  function BasicRésuméJson$Content$Job$Position$Compensation$Tier$Companion() {
    BasicRésuméJson$Content$Job$Position$Compensation$Tier$Companion_instance = this;
  }
  BasicRésuméJson$Content$Job$Position$Compensation$Tier$Companion.prototype.invoke_61zpoe$ = function (jsonString) {
    var $receiver = BasicRésuméJson$Content$Job$Position$Compensation$Tier$values();
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (equals(element.jsonString, jsonString)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  };
  BasicRésuméJson$Content$Job$Position$Compensation$Tier$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BasicRésuméJson$Content$Job$Position$Compensation$Tier$Companion_instance = null;
  function BasicRésuméJson$Content$Job$Position$Compensation$Tier$Companion_getInstance() {
    BasicRésuméJson$Content$Job$Position$Compensation$Tier_initFields();
    if (BasicRésuméJson$Content$Job$Position$Compensation$Tier$Companion_instance === null) {
      new BasicRésuméJson$Content$Job$Position$Compensation$Tier$Companion();
    }
    return BasicRésuméJson$Content$Job$Position$Compensation$Tier$Companion_instance;
  }
  BasicRésuméJson$Content$Job$Position$Compensation$Tier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tier',
    interfaces: [Enum]
  };
  function BasicRésuméJson$Content$Job$Position$Compensation$Tier$values() {
    return [BasicRésuméJson$Content$Job$Position$Compensation$Tier$partTime_getInstance(), BasicRésuméJson$Content$Job$Position$Compensation$Tier$fullTime_getInstance()];
  }
  BasicRésuméJson$Content$Job$Position$Compensation$Tier.values = BasicRésuméJson$Content$Job$Position$Compensation$Tier$values;
  function BasicRésuméJson$Content$Job$Position$Compensation$Tier$valueOf(name) {
    switch (name) {
      case 'partTime':
        return BasicRésuméJson$Content$Job$Position$Compensation$Tier$partTime_getInstance();
      case 'fullTime':
        return BasicRésuméJson$Content$Job$Position$Compensation$Tier$fullTime_getInstance();
      default:throwISE('No enum constant R\xE9sum\xE9.BasicR\xE9sum\xE9Json.Content.Job.Position.Compensation.Tier.' + name);
    }
  }
  BasicRésuméJson$Content$Job$Position$Compensation$Tier.valueOf_61zpoe$ = BasicRésuméJson$Content$Job$Position$Compensation$Tier$valueOf;
  BasicRésuméJson$Content$Job$Position$Compensation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Compensation',
    interfaces: []
  };
  BasicRésuméJson$Content$Job$Position$Compensation.prototype.component1 = function () {
    return this.type;
  };
  BasicRésuméJson$Content$Job$Position$Compensation.prototype.component2 = function () {
    return this.amount;
  };
  BasicRésuméJson$Content$Job$Position$Compensation.prototype.component3 = function () {
    return this.tier;
  };
  BasicRésuméJson$Content$Job$Position$Compensation.prototype.copy_riu3ac$ = function (type, amount, tier) {
    return new BasicRésuméJson$Content$Job$Position$Compensation(type === void 0 ? this.type : type, amount === void 0 ? this.amount : amount, tier === void 0 ? this.tier : tier);
  };
  BasicRésuméJson$Content$Job$Position$Compensation.prototype.toString = function () {
    return 'Compensation(type=' + Kotlin.toString(this.type) + (', amount=' + Kotlin.toString(this.amount)) + (', tier=' + Kotlin.toString(this.tier)) + ')';
  };
  BasicRésuméJson$Content$Job$Position$Compensation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.amount) | 0;
    result = result * 31 + Kotlin.hashCode(this.tier) | 0;
    return result;
  };
  BasicRésuméJson$Content$Job$Position$Compensation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.amount, other.amount) && Kotlin.equals(this.tier, other.tier)))));
  };
  BasicRésuméJson$Content$Job$Position.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Position',
    interfaces: []
  };
  BasicRésuméJson$Content$Job$Position.prototype.component1 = function () {
    return this.date;
  };
  BasicRésuméJson$Content$Job$Position.prototype.component2 = function () {
    return this.title;
  };
  BasicRésuméJson$Content$Job$Position.prototype.component3 = function () {
    return this.description;
  };
  BasicRésuméJson$Content$Job$Position.prototype.component4 = function () {
    return this.compensation;
  };
  BasicRésuméJson$Content$Job$Position.prototype.copy_jad6cd$ = function (date, title, description, compensation) {
    return new BasicRésuméJson$Content$Job$Position(date === void 0 ? this.date : date, title === void 0 ? this.title : title, description === void 0 ? this.description : description, compensation === void 0 ? this.compensation : compensation);
  };
  BasicRésuméJson$Content$Job$Position.prototype.toString = function () {
    return 'Position(date=' + Kotlin.toString(this.date) + (', title=' + Kotlin.toString(this.title)) + (', description=' + Kotlin.toString(this.description)) + (', compensation=' + Kotlin.toString(this.compensation)) + ')';
  };
  BasicRésuméJson$Content$Job$Position.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.date) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.compensation) | 0;
    return result;
  };
  BasicRésuméJson$Content$Job$Position.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.date, other.date) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.compensation, other.compensation)))));
  };
  function BasicRésuméJson$Content$Job$ReasonForLeaving(brief, description) {
    BasicRésuméJson$Content$Job$ReasonForLeaving$Companion_getInstance();
    this.brief = brief;
    this.description = description;
  }
  function BasicRésuméJson$Content$Job$ReasonForLeaving$Companion() {
    BasicRésuméJson$Content$Job$ReasonForLeaving$Companion_instance = this;
  }
  BasicRésuméJson$Content$Job$ReasonForLeaving$Companion.prototype.invoke_qk3xy8$ = function (jsonObject) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$_0 = typeof (tmp$ = jsonObject['brief']) === 'string' ? tmp$ : null;
    if (tmp$_0 == null) {
      return null;
    }
    tmp$_2 = typeof (tmp$_1 = jsonObject['description']) === 'string' ? tmp$_1 : null;
    if (tmp$_2 == null) {
      return null;
    }
    return new BasicRésuméJson$Content$Job$ReasonForLeaving(tmp$_0, tmp$_2);
  };
  BasicRésuméJson$Content$Job$ReasonForLeaving$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BasicRésuméJson$Content$Job$ReasonForLeaving$Companion_instance = null;
  function BasicRésuméJson$Content$Job$ReasonForLeaving$Companion_getInstance() {
    if (BasicRésuméJson$Content$Job$ReasonForLeaving$Companion_instance === null) {
      new BasicRésuméJson$Content$Job$ReasonForLeaving$Companion();
    }
    return BasicRésuméJson$Content$Job$ReasonForLeaving$Companion_instance;
  }
  BasicRésuméJson$Content$Job$ReasonForLeaving.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReasonForLeaving',
    interfaces: []
  };
  BasicRésuméJson$Content$Job$ReasonForLeaving.prototype.component1 = function () {
    return this.brief;
  };
  BasicRésuméJson$Content$Job$ReasonForLeaving.prototype.component2 = function () {
    return this.description;
  };
  BasicRésuméJson$Content$Job$ReasonForLeaving.prototype.copy_puj7f4$ = function (brief, description) {
    return new BasicRésuméJson$Content$Job$ReasonForLeaving(brief === void 0 ? this.brief : brief, description === void 0 ? this.description : description);
  };
  BasicRésuméJson$Content$Job$ReasonForLeaving.prototype.toString = function () {
    return 'ReasonForLeaving(brief=' + Kotlin.toString(this.brief) + (', description=' + Kotlin.toString(this.description)) + ')';
  };
  BasicRésuméJson$Content$Job$ReasonForLeaving.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.brief) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    return result;
  };
  BasicRésuméJson$Content$Job$ReasonForLeaving.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.brief, other.brief) && Kotlin.equals(this.description, other.description)))));
  };
  BasicRésuméJson$Content$Job.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Job',
    interfaces: []
  };
  BasicRésuméJson$Content$Job.prototype.component1 = function () {
    return this.id;
  };
  BasicRésuméJson$Content$Job.prototype.component2 = function () {
    return this.company;
  };
  BasicRésuméJson$Content$Job.prototype.component3 = function () {
    return this.start;
  };
  BasicRésuméJson$Content$Job.prototype.component4 = function () {
    return this.end;
  };
  BasicRésuméJson$Content$Job.prototype.component5 = function () {
    return this.keywords;
  };
  BasicRésuméJson$Content$Job.prototype.component6 = function () {
    return this.tags;
  };
  BasicRésuméJson$Content$Job.prototype.component7 = function () {
    return this.reasonForLeaving;
  };
  BasicRésuméJson$Content$Job.prototype.copy_7n624e$ = function (id, company, start, end, keywords, tags, reasonForLeaving) {
    return new BasicRésuméJson$Content$Job(id === void 0 ? this.id : id, company === void 0 ? this.company : company, start === void 0 ? this.start : start, end === void 0 ? this.end : end, keywords === void 0 ? this.keywords : keywords, tags === void 0 ? this.tags : tags, reasonForLeaving === void 0 ? this.reasonForLeaving : reasonForLeaving);
  };
  BasicRésuméJson$Content$Job.prototype.toString = function () {
    return 'Job(id=' + Kotlin.toString(this.id) + (', company=' + Kotlin.toString(this.company)) + (', start=' + Kotlin.toString(this.start)) + (', end=' + Kotlin.toString(this.end)) + (', keywords=' + Kotlin.toString(this.keywords)) + (', tags=' + Kotlin.toString(this.tags)) + (', reasonForLeaving=' + Kotlin.toString(this.reasonForLeaving)) + ')';
  };
  BasicRésuméJson$Content$Job.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.company) | 0;
    result = result * 31 + Kotlin.hashCode(this.start) | 0;
    result = result * 31 + Kotlin.hashCode(this.end) | 0;
    result = result * 31 + Kotlin.hashCode(this.keywords) | 0;
    result = result * 31 + Kotlin.hashCode(this.tags) | 0;
    result = result * 31 + Kotlin.hashCode(this.reasonForLeaving) | 0;
    return result;
  };
  BasicRésuméJson$Content$Job.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.company, other.company) && Kotlin.equals(this.start, other.start) && Kotlin.equals(this.end, other.end) && Kotlin.equals(this.keywords, other.keywords) && Kotlin.equals(this.tags, other.tags) && Kotlin.equals(this.reasonForLeaving, other.reasonForLeaving)))));
  };
  BasicRésuméJson$Content.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Content',
    interfaces: []
  };
  BasicRésuméJson$Content.prototype.component1 = function () {
    return this.contact;
  };
  BasicRésuméJson$Content.prototype.component2 = function () {
    return this.workHistory;
  };
  BasicRésuméJson$Content.prototype.copy_ik3se4$ = function (contact, workHistory) {
    return new BasicRésuméJson$Content(contact === void 0 ? this.contact : contact, workHistory === void 0 ? this.workHistory : workHistory);
  };
  BasicRésuméJson$Content.prototype.toString = function () {
    return 'Content(contact=' + Kotlin.toString(this.contact) + (', workHistory=' + Kotlin.toString(this.workHistory)) + ')';
  };
  BasicRésuméJson$Content.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.contact) | 0;
    result = result * 31 + Kotlin.hashCode(this.workHistory) | 0;
    return result;
  };
  BasicRésuméJson$Content.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.contact, other.contact) && Kotlin.equals(this.workHistory, other.workHistory)))));
  };
  BasicRésuméJson.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BasicR\xE9sum\xE9Json',
    interfaces: []
  };
  BasicRésuméJson.prototype.component1 = function () {
    return this.meta;
  };
  BasicRésuméJson.prototype.component2 = function () {
    return this.content;
  };
  BasicRésuméJson.prototype.copy_s5i83s$ = function (meta, content) {
    return new BasicRésuméJson(meta === void 0 ? this.meta : meta, content === void 0 ? this.content : content);
  };
  BasicRésuméJson.prototype.toString = function () {
    return 'BasicR\xE9sum\xE9Json(meta=' + Kotlin.toString(this.meta) + (', content=' + Kotlin.toString(this.content)) + ')';
  };
  BasicRésuméJson.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.meta) | 0;
    result = result * 31 + Kotlin.hashCode(this.content) | 0;
    return result;
  };
  BasicRésuméJson.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.meta, other.meta) && Kotlin.equals(this.content, other.content)))));
  };
  function RésuméFilterJson(meta, filters) {
    RésuméFilterJson$Companion_getInstance();
    this.meta = meta;
    this.filters = filters;
  }
  function RésuméFilterJson$Companion() {
    RésuméFilterJson$Companion_instance = this;
    this.compatibleVersionRegex_0 = Regex_init('1\\.\\d(?:\\.\\d)?');
  }
  RésuméFilterJson$Companion.prototype.invoke_qk3xy8$ = function (jsonObject) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    var formatVersion = jsonObject['format-version'];
    if (!(typeof formatVersion === 'string') || !this.compatibleVersionRegex_0.matches_6bul2c$(formatVersion)) {
      println('Incompatible format version');
      return null;
    }
    tmp$_1 = RésuméFilterJson$Meta$Companion_getInstance();
    tmp$_0 = Kotlin.isType(tmp$ = jsonObject['meta'], Object) ? tmp$ : null;
    if (tmp$_0 == null) {
      return null;
    }
    tmp$_2 = tmp$_1.invoke_qk3xy8$(tmp$_0);
    if (tmp$_2 == null) {
      return null;
    }
    tmp$_5 = RésuméFilterJson$RecursiveFilter$Companion_getInstance();
    tmp$_4 = Kotlin.isType(tmp$_3 = jsonObject['filters'], Object) ? tmp$_3 : null;
    if (tmp$_4 == null) {
      return null;
    }
    tmp$_6 = tmp$_5.invoke_qk3xy8$(tmp$_4);
    if (tmp$_6 == null) {
      return null;
    }
    return new RésuméFilterJson(tmp$_2, tmp$_6);
  };
  RésuméFilterJson$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RésuméFilterJson$Companion_instance = null;
  function RésuméFilterJson$Companion_getInstance() {
    if (RésuméFilterJson$Companion_instance === null) {
      new RésuméFilterJson$Companion();
    }
    return RésuméFilterJson$Companion_instance;
  }
  function RésuméFilterJson$Meta(id, infoVersion, title) {
    RésuméFilterJson$Meta$Companion_getInstance();
    this.id = id;
    this.infoVersion = infoVersion;
    this.title = title;
  }
  function RésuméFilterJson$Meta$Companion() {
    RésuméFilterJson$Meta$Companion_instance = this;
  }
  RésuméFilterJson$Meta$Companion.prototype.invoke_qk3xy8$ = function (jsonObject) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    tmp$_0 = typeof (tmp$ = jsonObject['id']) === 'string' ? tmp$ : null;
    if (tmp$_0 == null) {
      return null;
    }
    tmp$_3 = KotlinVersion.Companion;
    tmp$_2 = typeof (tmp$_1 = jsonObject['info-version']) === 'string' ? tmp$_1 : null;
    if (tmp$_2 == null) {
      return null;
    }
    tmp$_4 = invoke(tmp$_3, tmp$_2);
    if (tmp$_4 == null) {
      return null;
    }
    tmp$_6 = typeof (tmp$_5 = jsonObject['title']) === 'string' ? tmp$_5 : null;
    if (tmp$_6 == null) {
      return null;
    }
    return new RésuméFilterJson$Meta(tmp$_0, tmp$_4, tmp$_6);
  };
  RésuméFilterJson$Meta$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RésuméFilterJson$Meta$Companion_instance = null;
  function RésuméFilterJson$Meta$Companion_getInstance() {
    if (RésuméFilterJson$Meta$Companion_instance === null) {
      new RésuméFilterJson$Meta$Companion();
    }
    return RésuméFilterJson$Meta$Companion_instance;
  }
  RésuméFilterJson$Meta.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Meta',
    interfaces: []
  };
  RésuméFilterJson$Meta.prototype.component1 = function () {
    return this.id;
  };
  RésuméFilterJson$Meta.prototype.component2 = function () {
    return this.infoVersion;
  };
  RésuméFilterJson$Meta.prototype.component3 = function () {
    return this.title;
  };
  RésuméFilterJson$Meta.prototype.copy_v54qkq$ = function (id, infoVersion, title) {
    return new RésuméFilterJson$Meta(id === void 0 ? this.id : id, infoVersion === void 0 ? this.infoVersion : infoVersion, title === void 0 ? this.title : title);
  };
  RésuméFilterJson$Meta.prototype.toString = function () {
    return 'Meta(id=' + Kotlin.toString(this.id) + (', infoVersion=' + Kotlin.toString(this.infoVersion)) + (', title=' + Kotlin.toString(this.title)) + ')';
  };
  RésuméFilterJson$Meta.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.infoVersion) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    return result;
  };
  RésuméFilterJson$Meta.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.infoVersion, other.infoVersion) && Kotlin.equals(this.title, other.title)))));
  };
  function RésuméFilterJson$RecursiveFilter(inclusion, criteria) {
    RésuméFilterJson$RecursiveFilter$Companion_getInstance();
    this.inclusion = inclusion;
    this.criteria = criteria;
  }
  function RésuméFilterJson$RecursiveFilter$Companion() {
    RésuméFilterJson$RecursiveFilter$Companion_instance = this;
  }
  RésuméFilterJson$RecursiveFilter$Companion.prototype.invoke_qk3xy8$ = function (jsonObject) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    tmp$_1 = RésuméFilterJson$RecursiveFilter$Inclusion$Companion_getInstance();
    tmp$_0 = typeof (tmp$ = jsonObject['inclusion']) === 'string' ? tmp$ : null;
    if (tmp$_0 == null) {
      return null;
    }
    tmp$_2 = tmp$_1.invoke_61zpoe$(tmp$_0);
    if (tmp$_2 == null) {
      return null;
    }
    var tmp$_6;
    if ((tmp$_4 = Kotlin.isArray(tmp$_3 = jsonObject['criteria']) ? tmp$_3 : null) != null) {
      var destination = ArrayList_init_0(tmp$_4.length);
      var tmp$_7;
      for (tmp$_7 = 0; tmp$_7 !== tmp$_4.length; ++tmp$_7) {
        var item = tmp$_4[tmp$_7];
        var tmp$_8 = destination.add_11rb$;
        var tmp$_9, tmp$_10, tmp$_11, tmp$_12;
        tmp$_11 = RésuméFilterJson$RecursiveFilter$Criterion$Companion_getInstance();
        tmp$_10 = Kotlin.isType(tmp$_9 = item, Object) ? tmp$_9 : null;
        if (tmp$_10 == null) {
          return null;
        }
        tmp$_12 = tmp$_11.invoke_qk3xy8$(tmp$_10);
        if (tmp$_12 == null) {
          return null;
        }
        tmp$_8.call(destination, tmp$_12);
      }
      tmp$_6 = destination;
    }
     else
      tmp$_6 = null;
    tmp$_5 = tmp$_6;
    if (tmp$_5 == null) {
      return null;
    }
    return new RésuméFilterJson$RecursiveFilter(tmp$_2, tmp$_5);
  };
  RésuméFilterJson$RecursiveFilter$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RésuméFilterJson$RecursiveFilter$Companion_instance = null;
  function RésuméFilterJson$RecursiveFilter$Companion_getInstance() {
    if (RésuméFilterJson$RecursiveFilter$Companion_instance === null) {
      new RésuméFilterJson$RecursiveFilter$Companion();
    }
    return RésuméFilterJson$RecursiveFilter$Companion_instance;
  }
  function RésuméFilterJson$RecursiveFilter$Inclusion(name, ordinal, jsonString) {
    Enum.call(this);
    this.jsonString = jsonString;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function RésuméFilterJson$RecursiveFilter$Inclusion_initFields() {
    RésuméFilterJson$RecursiveFilter$Inclusion_initFields = function () {
    };
    RésuméFilterJson$RecursiveFilter$Inclusion$any_instance = new RésuméFilterJson$RecursiveFilter$Inclusion('any', 0, 'any');
    RésuméFilterJson$RecursiveFilter$Inclusion$all_instance = new RésuméFilterJson$RecursiveFilter$Inclusion('all', 1, 'all');
    RésuméFilterJson$RecursiveFilter$Inclusion$Companion_getInstance();
  }
  var RésuméFilterJson$RecursiveFilter$Inclusion$any_instance;
  function RésuméFilterJson$RecursiveFilter$Inclusion$any_getInstance() {
    RésuméFilterJson$RecursiveFilter$Inclusion_initFields();
    return RésuméFilterJson$RecursiveFilter$Inclusion$any_instance;
  }
  var RésuméFilterJson$RecursiveFilter$Inclusion$all_instance;
  function RésuméFilterJson$RecursiveFilter$Inclusion$all_getInstance() {
    RésuméFilterJson$RecursiveFilter$Inclusion_initFields();
    return RésuméFilterJson$RecursiveFilter$Inclusion$all_instance;
  }
  function RésuméFilterJson$RecursiveFilter$Inclusion$Companion() {
    RésuméFilterJson$RecursiveFilter$Inclusion$Companion_instance = this;
  }
  RésuméFilterJson$RecursiveFilter$Inclusion$Companion.prototype.invoke_61zpoe$ = function (jsonString) {
    var $receiver = RésuméFilterJson$RecursiveFilter$Inclusion$values();
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (equals(element.jsonString, jsonString)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  };
  RésuméFilterJson$RecursiveFilter$Inclusion$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RésuméFilterJson$RecursiveFilter$Inclusion$Companion_instance = null;
  function RésuméFilterJson$RecursiveFilter$Inclusion$Companion_getInstance() {
    RésuméFilterJson$RecursiveFilter$Inclusion_initFields();
    if (RésuméFilterJson$RecursiveFilter$Inclusion$Companion_instance === null) {
      new RésuméFilterJson$RecursiveFilter$Inclusion$Companion();
    }
    return RésuméFilterJson$RecursiveFilter$Inclusion$Companion_instance;
  }
  RésuméFilterJson$RecursiveFilter$Inclusion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Inclusion',
    interfaces: [Enum]
  };
  function RésuméFilterJson$RecursiveFilter$Inclusion$values() {
    return [RésuméFilterJson$RecursiveFilter$Inclusion$any_getInstance(), RésuméFilterJson$RecursiveFilter$Inclusion$all_getInstance()];
  }
  RésuméFilterJson$RecursiveFilter$Inclusion.values = RésuméFilterJson$RecursiveFilter$Inclusion$values;
  function RésuméFilterJson$RecursiveFilter$Inclusion$valueOf(name) {
    switch (name) {
      case 'any':
        return RésuméFilterJson$RecursiveFilter$Inclusion$any_getInstance();
      case 'all':
        return RésuméFilterJson$RecursiveFilter$Inclusion$all_getInstance();
      default:throwISE('No enum constant R\xE9sum\xE9.R\xE9sum\xE9FilterJson.RecursiveFilter.Inclusion.' + name);
    }
  }
  RésuméFilterJson$RecursiveFilter$Inclusion.valueOf_61zpoe$ = RésuméFilterJson$RecursiveFilter$Inclusion$valueOf;
  function RésuméFilterJson$RecursiveFilter$Criterion(scope, type, values) {
    RésuméFilterJson$RecursiveFilter$Criterion$Companion_getInstance();
    this.scope = scope;
    this.type = type;
    this.values = values;
  }
  function RésuméFilterJson$RecursiveFilter$Criterion$Companion() {
    RésuméFilterJson$RecursiveFilter$Criterion$Companion_instance = this;
  }
  var mapNotNullTo$lambda_3 = wrapFunction(function () {
    return function (closure$transform, closure$destination) {
      return function (element) {
        var tmp$;
        if ((tmp$ = closure$transform(element)) != null) {
          closure$destination.add_11rb$(tmp$);
        }
        return Unit;
      };
    };
  });
  RésuméFilterJson$RecursiveFilter$Criterion$Companion.prototype.invoke_qk3xy8$ = function (jsonObject) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    tmp$_1 = RésuméFilterJson$RecursiveFilter$Criterion$Scope$Companion_getInstance();
    tmp$_0 = typeof (tmp$ = jsonObject['scope']) === 'string' ? tmp$ : null;
    if (tmp$_0 == null) {
      return null;
    }
    tmp$_2 = tmp$_1.invoke_61zpoe$(tmp$_0);
    if (tmp$_2 == null) {
      return null;
    }
    tmp$_5 = RésuméFilterJson$RecursiveFilter$Criterion$Type$Companion_getInstance();
    tmp$_4 = typeof (tmp$_3 = jsonObject['type']) === 'string' ? tmp$_3 : null;
    if (tmp$_4 == null) {
      return null;
    }
    tmp$_6 = tmp$_5.invoke_61zpoe$(tmp$_4);
    if (tmp$_6 == null) {
      return null;
    }
    tmp$_8 = Kotlin.isArray(tmp$_7 = jsonObject['values']) ? tmp$_7 : null;
    if (tmp$_8 == null) {
      return null;
    }
    var destination = LinkedHashSet_init();
    var tmp$_9;
    for (tmp$_9 = 0; tmp$_9 !== tmp$_8.length; ++tmp$_9) {
      var element = tmp$_8[tmp$_9];
      var tmp$_0_0;
      var tmp$_10;
      if ((tmp$_0_0 = typeof (tmp$_10 = element) === 'string' ? tmp$_10 : null) != null) {
        destination.add_11rb$(tmp$_0_0);
      }
    }
    return new RésuméFilterJson$RecursiveFilter$Criterion(tmp$_2, tmp$_6, destination);
  };
  RésuméFilterJson$RecursiveFilter$Criterion$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RésuméFilterJson$RecursiveFilter$Criterion$Companion_instance = null;
  function RésuméFilterJson$RecursiveFilter$Criterion$Companion_getInstance() {
    if (RésuméFilterJson$RecursiveFilter$Criterion$Companion_instance === null) {
      new RésuméFilterJson$RecursiveFilter$Criterion$Companion();
    }
    return RésuméFilterJson$RecursiveFilter$Criterion$Companion_instance;
  }
  function RésuméFilterJson$RecursiveFilter$Criterion$Scope(name, ordinal, jsonString) {
    Enum.call(this);
    this.jsonString = jsonString;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function RésuméFilterJson$RecursiveFilter$Criterion$Scope_initFields() {
    RésuméFilterJson$RecursiveFilter$Criterion$Scope_initFields = function () {
    };
    RésuméFilterJson$RecursiveFilter$Criterion$Scope$keywords_instance = new RésuméFilterJson$RecursiveFilter$Criterion$Scope('keywords', 0, 'keywords');
    RésuméFilterJson$RecursiveFilter$Criterion$Scope$Companion_getInstance();
  }
  var RésuméFilterJson$RecursiveFilter$Criterion$Scope$keywords_instance;
  function RésuméFilterJson$RecursiveFilter$Criterion$Scope$keywords_getInstance() {
    RésuméFilterJson$RecursiveFilter$Criterion$Scope_initFields();
    return RésuméFilterJson$RecursiveFilter$Criterion$Scope$keywords_instance;
  }
  function RésuméFilterJson$RecursiveFilter$Criterion$Scope$Companion() {
    RésuméFilterJson$RecursiveFilter$Criterion$Scope$Companion_instance = this;
  }
  RésuméFilterJson$RecursiveFilter$Criterion$Scope$Companion.prototype.invoke_61zpoe$ = function (jsonString) {
    var $receiver = RésuméFilterJson$RecursiveFilter$Criterion$Scope$values();
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (equals(element.jsonString, jsonString)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  };
  RésuméFilterJson$RecursiveFilter$Criterion$Scope$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RésuméFilterJson$RecursiveFilter$Criterion$Scope$Companion_instance = null;
  function RésuméFilterJson$RecursiveFilter$Criterion$Scope$Companion_getInstance() {
    RésuméFilterJson$RecursiveFilter$Criterion$Scope_initFields();
    if (RésuméFilterJson$RecursiveFilter$Criterion$Scope$Companion_instance === null) {
      new RésuméFilterJson$RecursiveFilter$Criterion$Scope$Companion();
    }
    return RésuméFilterJson$RecursiveFilter$Criterion$Scope$Companion_instance;
  }
  RésuméFilterJson$RecursiveFilter$Criterion$Scope.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Scope',
    interfaces: [Enum]
  };
  function RésuméFilterJson$RecursiveFilter$Criterion$Scope$values() {
    return [RésuméFilterJson$RecursiveFilter$Criterion$Scope$keywords_getInstance()];
  }
  RésuméFilterJson$RecursiveFilter$Criterion$Scope.values = RésuméFilterJson$RecursiveFilter$Criterion$Scope$values;
  function RésuméFilterJson$RecursiveFilter$Criterion$Scope$valueOf(name) {
    switch (name) {
      case 'keywords':
        return RésuméFilterJson$RecursiveFilter$Criterion$Scope$keywords_getInstance();
      default:throwISE('No enum constant R\xE9sum\xE9.R\xE9sum\xE9FilterJson.RecursiveFilter.Criterion.Scope.' + name);
    }
  }
  RésuméFilterJson$RecursiveFilter$Criterion$Scope.valueOf_61zpoe$ = RésuméFilterJson$RecursiveFilter$Criterion$Scope$valueOf;
  function RésuméFilterJson$RecursiveFilter$Criterion$Type(name, ordinal, jsonString) {
    Enum.call(this);
    this.jsonString = jsonString;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function RésuméFilterJson$RecursiveFilter$Criterion$Type_initFields() {
    RésuméFilterJson$RecursiveFilter$Criterion$Type_initFields = function () {
    };
    RésuméFilterJson$RecursiveFilter$Criterion$Type$contains_instance = new RésuméFilterJson$RecursiveFilter$Criterion$Type('contains', 0, 'contains');
    RésuméFilterJson$RecursiveFilter$Criterion$Type$Companion_getInstance();
  }
  var RésuméFilterJson$RecursiveFilter$Criterion$Type$contains_instance;
  function RésuméFilterJson$RecursiveFilter$Criterion$Type$contains_getInstance() {
    RésuméFilterJson$RecursiveFilter$Criterion$Type_initFields();
    return RésuméFilterJson$RecursiveFilter$Criterion$Type$contains_instance;
  }
  function RésuméFilterJson$RecursiveFilter$Criterion$Type$Companion() {
    RésuméFilterJson$RecursiveFilter$Criterion$Type$Companion_instance = this;
  }
  RésuméFilterJson$RecursiveFilter$Criterion$Type$Companion.prototype.invoke_61zpoe$ = function (jsonString) {
    var $receiver = RésuméFilterJson$RecursiveFilter$Criterion$Type$values();
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (equals(element.jsonString, jsonString)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  };
  RésuméFilterJson$RecursiveFilter$Criterion$Type$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RésuméFilterJson$RecursiveFilter$Criterion$Type$Companion_instance = null;
  function RésuméFilterJson$RecursiveFilter$Criterion$Type$Companion_getInstance() {
    RésuméFilterJson$RecursiveFilter$Criterion$Type_initFields();
    if (RésuméFilterJson$RecursiveFilter$Criterion$Type$Companion_instance === null) {
      new RésuméFilterJson$RecursiveFilter$Criterion$Type$Companion();
    }
    return RésuméFilterJson$RecursiveFilter$Criterion$Type$Companion_instance;
  }
  RésuméFilterJson$RecursiveFilter$Criterion$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function RésuméFilterJson$RecursiveFilter$Criterion$Type$values() {
    return [RésuméFilterJson$RecursiveFilter$Criterion$Type$contains_getInstance()];
  }
  RésuméFilterJson$RecursiveFilter$Criterion$Type.values = RésuméFilterJson$RecursiveFilter$Criterion$Type$values;
  function RésuméFilterJson$RecursiveFilter$Criterion$Type$valueOf(name) {
    switch (name) {
      case 'contains':
        return RésuméFilterJson$RecursiveFilter$Criterion$Type$contains_getInstance();
      default:throwISE('No enum constant R\xE9sum\xE9.R\xE9sum\xE9FilterJson.RecursiveFilter.Criterion.Type.' + name);
    }
  }
  RésuméFilterJson$RecursiveFilter$Criterion$Type.valueOf_61zpoe$ = RésuméFilterJson$RecursiveFilter$Criterion$Type$valueOf;
  RésuméFilterJson$RecursiveFilter$Criterion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Criterion',
    interfaces: []
  };
  RésuméFilterJson$RecursiveFilter$Criterion.prototype.component1 = function () {
    return this.scope;
  };
  RésuméFilterJson$RecursiveFilter$Criterion.prototype.component2 = function () {
    return this.type;
  };
  RésuméFilterJson$RecursiveFilter$Criterion.prototype.component3 = function () {
    return this.values;
  };
  RésuméFilterJson$RecursiveFilter$Criterion.prototype.copy_l9xw6b$ = function (scope, type, values) {
    return new RésuméFilterJson$RecursiveFilter$Criterion(scope === void 0 ? this.scope : scope, type === void 0 ? this.type : type, values === void 0 ? this.values : values);
  };
  RésuméFilterJson$RecursiveFilter$Criterion.prototype.toString = function () {
    return 'Criterion(scope=' + Kotlin.toString(this.scope) + (', type=' + Kotlin.toString(this.type)) + (', values=' + Kotlin.toString(this.values)) + ')';
  };
  RésuméFilterJson$RecursiveFilter$Criterion.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.scope) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.values) | 0;
    return result;
  };
  RésuméFilterJson$RecursiveFilter$Criterion.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.scope, other.scope) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.values, other.values)))));
  };
  RésuméFilterJson$RecursiveFilter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RecursiveFilter',
    interfaces: []
  };
  RésuméFilterJson$RecursiveFilter.prototype.component1 = function () {
    return this.inclusion;
  };
  RésuméFilterJson$RecursiveFilter.prototype.component2 = function () {
    return this.criteria;
  };
  RésuméFilterJson$RecursiveFilter.prototype.copy_c76mlc$ = function (inclusion, criteria) {
    return new RésuméFilterJson$RecursiveFilter(inclusion === void 0 ? this.inclusion : inclusion, criteria === void 0 ? this.criteria : criteria);
  };
  RésuméFilterJson$RecursiveFilter.prototype.toString = function () {
    return 'RecursiveFilter(inclusion=' + Kotlin.toString(this.inclusion) + (', criteria=' + Kotlin.toString(this.criteria)) + ')';
  };
  RésuméFilterJson$RecursiveFilter.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.inclusion) | 0;
    result = result * 31 + Kotlin.hashCode(this.criteria) | 0;
    return result;
  };
  RésuméFilterJson$RecursiveFilter.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.inclusion, other.inclusion) && Kotlin.equals(this.criteria, other.criteria)))));
  };
  RésuméFilterJson.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'R\xE9sum\xE9FilterJson',
    interfaces: []
  };
  RésuméFilterJson.prototype.component1 = function () {
    return this.meta;
  };
  RésuméFilterJson.prototype.component2 = function () {
    return this.filters;
  };
  RésuméFilterJson.prototype.copy_schgm5$ = function (meta, filters) {
    return new RésuméFilterJson(meta === void 0 ? this.meta : meta, filters === void 0 ? this.filters : filters);
  };
  RésuméFilterJson.prototype.toString = function () {
    return 'R\xE9sum\xE9FilterJson(meta=' + Kotlin.toString(this.meta) + (', filters=' + Kotlin.toString(this.filters)) + ')';
  };
  RésuméFilterJson.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.meta) | 0;
    result = result * 31 + Kotlin.hashCode(this.filters) | 0;
    return result;
  };
  RésuméFilterJson.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.meta, other.meta) && Kotlin.equals(this.filters, other.filters)))));
  };
  function résuméPagePlaceholder() {
    résuméPagePlaceholder_instance = this;
  }
  résuméPagePlaceholder.prototype.renderToHtmlElement = function () {
    var paragraph = document.createElement('p');
    paragraph.textContent = 'Loading...';
    return paragraph;
  };
  résuméPagePlaceholder.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'r\xE9sum\xE9PagePlaceholder',
    interfaces: [HtmlElementRenderable]
  };
  var résuméPagePlaceholder_instance = null;
  function résuméPagePlaceholder_getInstance() {
    if (résuméPagePlaceholder_instance === null) {
      new résuméPagePlaceholder();
    }
    return résuméPagePlaceholder_instance;
  }
  function UrlParser() {
    UrlParser_instance = this;
    this.uuidRegexPattern_0 = '[A-Z0-9-]{36}';
    this.fragmentRegexPattern_0 = '#?(?<base>[A-Z0-9-]{36})_(?<filter>[A-Z0-9-]{36})';
    this.fragmentRegex_0 = new RegExp(this.fragmentRegexPattern_0, 'i');
  }
  UrlParser.prototype.parse_h13imq$ = function (location) {
    var fragment = location.hash;
    return this.parseFragment_0(fragment);
  };
  UrlParser.prototype.parseFragment_0 = function (fragment) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = this.fragmentRegex_0.exec(fragment);
    if (tmp$ == null) {
      return UrlMeaning$Companion_getInstance().unknown;
    }
    var allGroups = tmp$;
    tmp$_0 = allGroups[1];
    if (tmp$_0 == null) {
      return UrlMeaning$Companion_getInstance().unknown;
    }
    var baseId = tmp$_0;
    tmp$_1 = allGroups[2];
    if (tmp$_1 == null) {
      return UrlMeaning$Companion_getInstance().unknown;
    }
    var filterId = tmp$_1;
    return new UrlMeaning(baseId, filterId);
  };
  UrlParser.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UrlParser',
    interfaces: []
  };
  var UrlParser_instance = null;
  function UrlParser_getInstance() {
    if (UrlParser_instance === null) {
      new UrlParser();
    }
    return UrlParser_instance;
  }
  function UrlMeaning(currentBaseRésuméId, currentRésuméFilterId) {
    UrlMeaning$Companion_getInstance();
    this.currentBaseRésuméId = currentBaseRésuméId;
    this.currentRésuméFilterId = currentRésuméFilterId;
  }
  function UrlMeaning$Companion() {
    UrlMeaning$Companion_instance = this;
    this.unknown = new UrlMeaning(null, null);
  }
  UrlMeaning$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var UrlMeaning$Companion_instance = null;
  function UrlMeaning$Companion_getInstance() {
    if (UrlMeaning$Companion_instance === null) {
      new UrlMeaning$Companion();
    }
    return UrlMeaning$Companion_instance;
  }
  UrlMeaning.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UrlMeaning',
    interfaces: []
  };
  UrlMeaning.prototype.component1 = function () {
    return this.currentBaseRésuméId;
  };
  UrlMeaning.prototype.component2 = function () {
    return this.currentRésuméFilterId;
  };
  UrlMeaning.prototype.copy_rkkr90$ = function (currentBaseRésuméId, currentRésuméFilterId) {
    return new UrlMeaning(currentBaseRésuméId === void 0 ? this.currentBaseRésuméId : currentBaseRésuméId, currentRésuméFilterId === void 0 ? this.currentRésuméFilterId : currentRésuméFilterId);
  };
  UrlMeaning.prototype.toString = function () {
    return 'UrlMeaning(currentBaseR\xE9sum\xE9Id=' + Kotlin.toString(this.currentBaseRésuméId) + (', currentR\xE9sum\xE9FilterId=' + Kotlin.toString(this.currentRésuméFilterId)) + ')';
  };
  UrlMeaning.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.currentBaseRésuméId) | 0;
    result = result * 31 + Kotlin.hashCode(this.currentRésuméFilterId) | 0;
    return result;
  };
  UrlMeaning.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.currentBaseRésuméId, other.currentBaseRésuméId) && Kotlin.equals(this.currentRésuméFilterId, other.currentRésuméFilterId)))));
  };
  var throwCCE = Kotlin.throwCCE;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  function createElementFromHTML(htmlString) {
    var tmp$, tmp$_0;
    var div = document.createElement('div');
    var tmp$_1;
    div.innerHTML = trim(Kotlin.isCharSequence(tmp$_1 = htmlString) ? tmp$_1 : throwCCE()).toString();
    var tmp$_2;
    if ((tmp$_0 = Kotlin.isType(tmp$ = div.firstChild, Element) ? tmp$ : null) != null)
      tmp$_2 = tmp$_0;
    else {
      console.error('Could not convert new HTML node into element');
      tmp$_2 = null;
    }
    return tmp$_2;
  }
  function HtmlStringRenderable() {
  }
  HtmlStringRenderable.prototype.renderToHtmlElement = function () {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = createElementFromHTML(this.renderToHtmlString())) != null)
      tmp$_0 = tmp$;
    else {
      var $receiver = document.createElement('div');
      console.error('Failed to create any element from HTML string; reverting to div');
      tmp$_0 = $receiver;
    }
    return tmp$_0;
  };
  HtmlStringRenderable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HtmlStringRenderable',
    interfaces: [HtmlElementRenderable]
  };
  function HtmlElementRenderable() {
  }
  HtmlElementRenderable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HtmlElementRenderable',
    interfaces: []
  };
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  function fetchAll(resources) {
    var destination = ArrayList_init_0(resources.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== resources.length; ++tmp$) {
      var item = resources[tmp$];
      destination.add_11rb$(fetch(item));
    }
    return Promise.all(copyToArray(destination));
  }
  var package$Extensions = _.Extensions || (_.Extensions = {});
  package$Extensions.invoke_1gbgeh$ = invoke;
  Object.defineProperty(_, 'allResourcePaths', {
    get: function () {
      return allResourcePaths;
    }
  });
  Object.defineProperty(_, 'cachedPortal', {
    get: function () {
      return cachedPortal;
    },
    set: function (value) {
      cachedPortal = value;
    }
  });
  _.main_kand9s$ = main;
  _.fetchAllAsJson_sb2h9h$ = fetchAllAsJson;
  _.resolveAllAsJson_drtnbh$ = resolveAllAsJson;
  var package$RequireJsInterface = _.RequireJsInterface || (_.RequireJsInterface = {});
  package$RequireJsInterface.RequireJSConfiguration = RequireJSConfiguration;
  var package$Résumé = _.Résumé || (_.Résumé = {});
  package$Résumé.DynamicRésumePageRenderer = DynamicRésumePageRenderer;
  Object.defineProperty(RésuméPageState, 'placeholder', {
    get: RésuméPageState$placeholder_getInstance
  });
  RésuméPageState.portal = RésuméPageState$portal;
  RésuméPageState.résumé = RésuméPageState$résumé;
  RésuméPageState.Cache = RésuméPageState$Cache;
  Object.defineProperty(RésuméPageState, 'Companion', {
    get: RésuméPageState$Companion_getInstance
  });
  package$Résumé.RésuméPageState = RésuméPageState;
  Object.defineProperty(Résumé, 'Companion', {
    get: Résumé$Companion_getInstance
  });
  package$Résumé.Résumé = Résumé;
  Object.defineProperty(RésuméPortal, 'Companion', {
    get: RésuméPortal$Companion_getInstance
  });
  package$Résumé.RésuméPortal = RésuméPortal;
  package$Résumé.RésuméPortalItem = RésuméPortalItem;
  Object.defineProperty(BasicRésuméJson, 'Companion', {
    get: BasicRésuméJson$Companion_getInstance
  });
  Object.defineProperty(BasicRésuméJson$Meta, 'Companion', {
    get: BasicRésuméJson$Meta$Companion_getInstance
  });
  BasicRésuméJson.Meta = BasicRésuméJson$Meta;
  Object.defineProperty(BasicRésuméJson$Content, 'Companion', {
    get: BasicRésuméJson$Content$Companion_getInstance
  });
  Object.defineProperty(BasicRésuméJson$Content$Contact, 'Companion', {
    get: BasicRésuméJson$Content$Contact$Companion_getInstance
  });
  BasicRésuméJson$Content.Contact = BasicRésuméJson$Content$Contact;
  Object.defineProperty(BasicRésuméJson$Content$Job, 'Companion', {
    get: BasicRésuméJson$Content$Job$Companion_getInstance
  });
  Object.defineProperty(BasicRésuméJson$Content$Job$Company, 'Companion', {
    get: BasicRésuméJson$Content$Job$Company$Companion_getInstance
  });
  BasicRésuméJson$Content$Job.Company = BasicRésuméJson$Content$Job$Company;
  Object.defineProperty(BasicRésuméJson$Content$Job$Position, 'Companion', {
    get: BasicRésuméJson$Content$Job$Position$Companion_getInstance
  });
  Object.defineProperty(BasicRésuméJson$Content$Job$Position$Compensation, 'Companion', {
    get: BasicRésuméJson$Content$Job$Position$Compensation$Companion_getInstance
  });
  Object.defineProperty(BasicRésuméJson$Content$Job$Position$Compensation$Type, 'hourly', {
    get: BasicRésuméJson$Content$Job$Position$Compensation$Type$hourly_getInstance
  });
  Object.defineProperty(BasicRésuméJson$Content$Job$Position$Compensation$Type, 'yearly', {
    get: BasicRésuméJson$Content$Job$Position$Compensation$Type$yearly_getInstance
  });
  Object.defineProperty(BasicRésuméJson$Content$Job$Position$Compensation$Type, 'Companion', {
    get: BasicRésuméJson$Content$Job$Position$Compensation$Type$Companion_getInstance
  });
  BasicRésuméJson$Content$Job$Position$Compensation.Type = BasicRésuméJson$Content$Job$Position$Compensation$Type;
  Object.defineProperty(BasicRésuméJson$Content$Job$Position$Compensation$Tier, 'partTime', {
    get: BasicRésuméJson$Content$Job$Position$Compensation$Tier$partTime_getInstance
  });
  Object.defineProperty(BasicRésuméJson$Content$Job$Position$Compensation$Tier, 'fullTime', {
    get: BasicRésuméJson$Content$Job$Position$Compensation$Tier$fullTime_getInstance
  });
  Object.defineProperty(BasicRésuméJson$Content$Job$Position$Compensation$Tier, 'Companion', {
    get: BasicRésuméJson$Content$Job$Position$Compensation$Tier$Companion_getInstance
  });
  BasicRésuméJson$Content$Job$Position$Compensation.Tier = BasicRésuméJson$Content$Job$Position$Compensation$Tier;
  BasicRésuméJson$Content$Job$Position.Compensation = BasicRésuméJson$Content$Job$Position$Compensation;
  BasicRésuméJson$Content$Job.Position = BasicRésuméJson$Content$Job$Position;
  Object.defineProperty(BasicRésuméJson$Content$Job$ReasonForLeaving, 'Companion', {
    get: BasicRésuméJson$Content$Job$ReasonForLeaving$Companion_getInstance
  });
  BasicRésuméJson$Content$Job.ReasonForLeaving = BasicRésuméJson$Content$Job$ReasonForLeaving;
  BasicRésuméJson$Content.Job = BasicRésuméJson$Content$Job;
  BasicRésuméJson.Content = BasicRésuméJson$Content;
  package$Résumé.BasicRésuméJson = BasicRésuméJson;
  Object.defineProperty(RésuméFilterJson, 'Companion', {
    get: RésuméFilterJson$Companion_getInstance
  });
  Object.defineProperty(RésuméFilterJson$Meta, 'Companion', {
    get: RésuméFilterJson$Meta$Companion_getInstance
  });
  RésuméFilterJson.Meta = RésuméFilterJson$Meta;
  Object.defineProperty(RésuméFilterJson$RecursiveFilter, 'Companion', {
    get: RésuméFilterJson$RecursiveFilter$Companion_getInstance
  });
  Object.defineProperty(RésuméFilterJson$RecursiveFilter$Inclusion, 'any', {
    get: RésuméFilterJson$RecursiveFilter$Inclusion$any_getInstance
  });
  Object.defineProperty(RésuméFilterJson$RecursiveFilter$Inclusion, 'all', {
    get: RésuméFilterJson$RecursiveFilter$Inclusion$all_getInstance
  });
  Object.defineProperty(RésuméFilterJson$RecursiveFilter$Inclusion, 'Companion', {
    get: RésuméFilterJson$RecursiveFilter$Inclusion$Companion_getInstance
  });
  RésuméFilterJson$RecursiveFilter.Inclusion = RésuméFilterJson$RecursiveFilter$Inclusion;
  Object.defineProperty(RésuméFilterJson$RecursiveFilter$Criterion, 'Companion', {
    get: RésuméFilterJson$RecursiveFilter$Criterion$Companion_getInstance
  });
  Object.defineProperty(RésuméFilterJson$RecursiveFilter$Criterion$Scope, 'keywords', {
    get: RésuméFilterJson$RecursiveFilter$Criterion$Scope$keywords_getInstance
  });
  Object.defineProperty(RésuméFilterJson$RecursiveFilter$Criterion$Scope, 'Companion', {
    get: RésuméFilterJson$RecursiveFilter$Criterion$Scope$Companion_getInstance
  });
  RésuméFilterJson$RecursiveFilter$Criterion.Scope = RésuméFilterJson$RecursiveFilter$Criterion$Scope;
  Object.defineProperty(RésuméFilterJson$RecursiveFilter$Criterion$Type, 'contains', {
    get: RésuméFilterJson$RecursiveFilter$Criterion$Type$contains_getInstance
  });
  Object.defineProperty(RésuméFilterJson$RecursiveFilter$Criterion$Type, 'Companion', {
    get: RésuméFilterJson$RecursiveFilter$Criterion$Type$Companion_getInstance
  });
  RésuméFilterJson$RecursiveFilter$Criterion.Type = RésuméFilterJson$RecursiveFilter$Criterion$Type;
  RésuméFilterJson$RecursiveFilter.Criterion = RésuméFilterJson$RecursiveFilter$Criterion;
  RésuméFilterJson.RecursiveFilter = RésuméFilterJson$RecursiveFilter;
  package$Résumé.RésuméFilterJson = RésuméFilterJson;
  Object.defineProperty(package$Résumé, 'r\xE9sum\xE9PagePlaceholder', {
    get: résuméPagePlaceholder_getInstance
  });
  Object.defineProperty(package$Résumé, 'UrlParser', {
    get: UrlParser_getInstance
  });
  Object.defineProperty(UrlMeaning, 'Companion', {
    get: UrlMeaning$Companion_getInstance
  });
  package$Résumé.UrlMeaning = UrlMeaning;
  var package$org = _.org || (_.org = {});
  var package$bh = package$org.bh || (package$org.bh = {});
  var package$tools = package$bh.tools || (package$bh.tools = {});
  var package$ui = package$tools.ui || (package$tools.ui = {});
  package$ui.createElementFromHTML_61zpoe$ = createElementFromHTML;
  package$ui.HtmlStringRenderable = HtmlStringRenderable;
  package$ui.HtmlElementRenderable = HtmlElementRenderable;
  var package$w3c = package$org.w3c || (package$org.w3c = {});
  var package$fetch = package$w3c.fetch || (package$w3c.fetch = {});
  package$fetch.fetchAll_vqirvp$ = fetchAll;
  kotlinVersionRegex = Regex_init('(\\d+)\\.(\\d+)(?:\\.(\\d+))+');
  allResourcePaths = ['/documents/resume-basic.json', '/documents/resume-filter-software-engineer.json'];
  cachedPortal = null;
  main([]);
  Kotlin.defineModule('resumes', _);
  return _;
}(typeof resumes === 'undefined' ? {} : resumes, kotlin);

//# sourceMappingURL=resumes.js.map
