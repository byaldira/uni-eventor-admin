## HOW TO USE REQUEST MODULE

* Api Url:
    Request module exports 'baseUrl' constant which holds the url to the underlying api
    the request this module makes. This allows us to easily update the domain api resides in.

* makeApiRequest Method:
    Prototype: makeApiRequest(requestMethd, relUrl, data, onsuccess, onfailure, modifyXhr = null)

    This method provides an api for making request to the web api this application is fed data from

    * requestMethd: POST, GET, etc.. HTTP Method
    * relUrl: Relative url to the requested resource, that is independent of the domain
    * data: Data object to be send with the request. Can be null
    * onsuccess: A handler for success event. Handler could also provide a parameter to receive
        the data returned from server. Example: function mySuccess(data) { // some code here }
    * onfailure: A handler for failure event. Handler could also provide a parameter to receive information
        about the error. Example: function myError(error) { // Awesome error handling code here }
    * modifyXhr: An optional parameter to let programmer modify XMLHttpRequestObject created by the function
        before the request is sent. Useful for managing request headers for instance. If what you are trying
        to do doesn't require such functionality, just don't provide this parameter