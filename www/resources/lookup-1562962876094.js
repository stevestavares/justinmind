(function(window, undefined) {
  var dictionary = {
    "02b2f756-ae78-4be6-80db-272dfd205c88": "Opened Image",
    "1588a5ef-bb0c-412d-bec8-f1a537707a06": "Contacts List",
    "e4f91eba-f8f8-444a-8ff7-9eea316b536c": "Chats List",
    "21018314-2ab1-47fa-8d94-47e6173afd76": "Chat-Eli",
    "9f6cf84b-e7cd-4901-806f-985b56ff1097": "Chat-Adam",
    "394173b4-f103-4d2b-a401-d0387300eb12": "Profile page",
    "2e1041d5-6bab-4de8-9736-40faa4ef60c5": "Chat-Emily",
    "1f326218-4a79-47f7-8686-26c720f63ba2": "Login",
    "4d3ffd13-479c-4907-9f75-833dcabed79b": "Chat-Susan",
    "55d32c7d-ced9-42af-b60f-763265513d21": "Image Gallery",
    "f31fc3aa-6694-4a0a-aa92-3d874a872912": "Chat-Thomas",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template SlideMenu",
    "f84b1243-d701-4927-a9e9-7b5e356b21b8": "Template No SlideMenu",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);