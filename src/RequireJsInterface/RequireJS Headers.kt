package RequireJsInterface

import kotlin.js.*


/**
 * @author Ben Leggiero
 * @since 2018-12-21
 */
@JsName("requirejs")
external class RequireJS {
    fun config(configuration: RequireJSConfiguration)
}



class RequireJSConfiguration(
        val enforceDefine: Boolean,
        val paths: Json
)



external fun require(resource: String, callback: RequireJSCallback = definedExternally, errorCallback: RequireJSErrorCallback = definedExternally)
external fun require(resources: Array<String>, callback: RequireJSCallback = definedExternally, errorCallback: RequireJSErrorCallback = definedExternally)
external fun require(resource: String): Any


typealias RequireJSCallback = (contents: Any) -> Unit
typealias RequireJSErrorCallback = (Throwable) -> Unit
