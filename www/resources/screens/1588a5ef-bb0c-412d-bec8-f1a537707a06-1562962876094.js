jQuery("#simulation")
  .on("click", ".s-1588a5ef-bb0c-412d-bec8-f1a537707a06 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is(".s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimSelectData",
                  "parameter": {
                    "datatype": "gridcell",
                    "datamaster": "contactsList",
                    "element": "#s-contacts_full",
                    "value": {
                      "field": "Name"
                    }
                  }
                },"Susan James" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "chatNameSelected" ],
                    "value": {
                      "datatype": "property",
                      "target": ".s-Input_5",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "chatPicSelected" ],
                    "value": {
                      "datatype": "property",
                      "target": ".s-Image_2",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4d3ffd13-479c-4907-9f75-833dcabed79b",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimSelectData",
                  "parameter": {
                    "datatype": "gridcell",
                    "datamaster": "contactsList",
                    "element": "#s-contacts_full",
                    "value": {
                      "field": "Name"
                    }
                  }
                },"Thomas Hawkings" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "chatNameSelected" ],
                    "value": {
                      "datatype": "property",
                      "target": ".s-Input_5",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "chatPicSelected" ],
                    "value": {
                      "datatype": "property",
                      "target": ".s-Image_2",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f31fc3aa-6694-4a0a-aa92-3d874a872912",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimSelectData",
                  "parameter": {
                    "datatype": "gridcell",
                    "datamaster": "contactsList",
                    "element": "#s-contacts_full",
                    "value": {
                      "field": "Name"
                    }
                  }
                },"Adam Black" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "chatNameSelected" ],
                    "value": {
                      "datatype": "property",
                      "target": ".s-Input_5",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "chatPicSelected" ],
                    "value": {
                      "datatype": "property",
                      "target": ".s-Image_2",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9f6cf84b-e7cd-4901-806f-985b56ff1097",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimSelectData",
                  "parameter": {
                    "datatype": "gridcell",
                    "datamaster": "contactsList",
                    "element": "#s-contacts_full",
                    "value": {
                      "field": "Name"
                    }
                  }
                },"Eli Johnson" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "chatNameSelected" ],
                    "value": {
                      "datatype": "property",
                      "target": ".s-Input_5",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "chatPicSelected" ],
                    "value": {
                      "datatype": "property",
                      "target": ".s-Image_2",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "chatsList",
                    "fields": {
                      "Picture": {
                        "datatype": "property",
                        "target": ".s-Image_2",
                        "property": "jimGetValue"
                      },
                      "Name": {
                        "datatype": "property",
                        "target": ".s-Input_5",
                        "property": "jimGetValue"
                      },
                      "Status": {
                        "datatype": "property",
                        "target": ".s-Input_6",
                        "property": "jimGetValue"
                      },
                      "Checked": "false",
                      "TimeLastChat": {
                        "action": "jimSubstring",
                        "parameter": [ {
                          "action": "jimSystemTime"
                        },"0","5" ]
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/21018314-2ab1-47fa-8d94-47e6173afd76",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimSelectData",
                  "parameter": {
                    "datatype": "gridcell",
                    "datamaster": "contactsList",
                    "element": "#s-contacts_full",
                    "value": {
                      "field": "Name"
                    }
                  }
                },"Emily Stewart" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "chatNameSelected" ],
                    "value": {
                      "datatype": "property",
                      "target": ".s-Input_5",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "chatPicSelected" ],
                    "value": {
                      "datatype": "property",
                      "target": ".s-Image_2",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "chatsList",
                    "fields": {
                      "Picture": {
                        "datatype": "property",
                        "target": ".s-Image_2",
                        "property": "jimGetValue"
                      },
                      "Name": {
                        "datatype": "property",
                        "target": ".s-Input_5",
                        "property": "jimGetValue"
                      },
                      "Status": {
                        "datatype": "property",
                        "target": ".s-Input_6",
                        "property": "jimGetValue"
                      },
                      "Checked": "false",
                      "TimeLastChat": {
                        "action": "jimSubstring",
                        "parameter": [ {
                          "action": "jimSystemTime"
                        },"0","5" ]
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/2e1041d5-6bab-4de8-9736-40faa4ef60c5",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ ".s-selecticon" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ ".s-Input_7" ],
                    "value": "false"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1588a5ef-bb0c-412d-bec8-f1a537707a06 #s-contacts_full .s-Grid_cell_2 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-1588a5ef-bb0c-412d-bec8-f1a537707a06 #s-contacts_full .s-Grid_cell_2": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-1588a5ef-bb0c-412d-bec8-f1a537707a06 #s-contacts_full .s-Grid_cell_2": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "contactsCheckOff" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "contactsCheckOff"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "contactsCheckOff"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_Search" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Menu_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-More_Menu" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 500,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Delete")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "contactsList",
                    "fields": {
                      "Picture": null,
                      "Name": null,
                      "Status": null,
                      "Checked": {
                        "datatype": "property",
                        "target": ".s-Input_7",
                        "property": "jimGetValue"
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_Search" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimDeleteData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "contactsList",
                      "value": {
                        "field": "Checked"
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-contacts_full" ],
                    "value": {
                      "datatype": "datamaster",
                      "datamaster": "contactsList"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Bg_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1588a5ef-bb0c-412d-bec8-f1a537707a06 #s-Bg_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#E8E3F9"
                      }
                    }
                  },{
                    "#s-1588a5ef-bb0c-412d-bec8-f1a537707a06 #s-Bg_2": {
                      "attributes-ie": {
                        "-pie-background": "#E8E3F9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1588a5ef-bb0c-412d-bec8-f1a537707a06 #s-Bg_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-1588a5ef-bb0c-412d-bec8-f1a537707a06 #s-Bg_2": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 100
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-More_Menu" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 500,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Bg_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1588a5ef-bb0c-412d-bec8-f1a537707a06 #s-Bg_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#E8E3F9"
                      }
                    }
                  },{
                    "#s-1588a5ef-bb0c-412d-bec8-f1a537707a06 #s-Bg_3": {
                      "attributes-ie": {
                        "-pie-background": "#E8E3F9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1588a5ef-bb0c-412d-bec8-f1a537707a06 #s-Bg_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-1588a5ef-bb0c-412d-bec8-f1a537707a06 #s-Bg_3": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 100
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-More_Menu" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 500,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Bg_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1588a5ef-bb0c-412d-bec8-f1a537707a06 #s-Bg_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#E8E3F9"
                      }
                    }
                  },{
                    "#s-1588a5ef-bb0c-412d-bec8-f1a537707a06 #s-Bg_4": {
                      "attributes-ie": {
                        "-pie-background": "#E8E3F9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1588a5ef-bb0c-412d-bec8-f1a537707a06 #s-Bg_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-1588a5ef-bb0c-412d-bec8-f1a537707a06 #s-Bg_4": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 100
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-More_Menu" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 500,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("click", ".s-1588a5ef-bb0c-412d-bec8-f1a537707a06 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-ShowSearch")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": [ "#s-InputSearch" ],
                      "effect": {
                        "type": "slide",
                        "easing": "swing",
                        "duration": 500,
                        "direction": "right"
                      }
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimFocusOn",
                    "parameter": {
                      "target": [ "#s-InputSearchChats" ]
                    },
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    }
  })
  .on("keyup.jim", ".s-1588a5ef-bb0c-412d-bec8-f1a537707a06 .keyup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-InputSearchChats")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-contacts_full" ],
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "contactsList",
                        "value": {
                          "action": "jimContains",
                          "parameter": [ {
                            "field": "Name"
                          },{
                            "datatype": "property",
                            "target": "#s-InputSearchChats",
                            "property": "jimGetValue"
                          } ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    }
  })
  .on("pageload", ".s-1588a5ef-bb0c-412d-bec8-f1a537707a06 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-1588a5ef-bb0c-412d-bec8-f1a537707a06")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Rectangle_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Rectangle_5": {
                      "attributes": {
                        "font-size": "14.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Rectangle_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Rectangle_5 span": {
                      "attributes": {
                        "color": "#6F6FDB",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Rectangle_5": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Image_74 > svg": {
                      "attributes": {
                        "overlay": "#6F6FDB"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Contacts_List" ],
                    "effect": {
                      "type": "blind",
                      "easing": "swing",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "timed",
          "delay": 500
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "contactsCheckOff" ],
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("taphold", ".s-1588a5ef-bb0c-412d-bec8-f1a537707a06 .taphold", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is(".s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ ".s-selecticon" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1588a5ef-bb0c-412d-bec8-f1a537707a06 #s-contacts_full .s-Grid_cell_2 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-1588a5ef-bb0c-412d-bec8-f1a537707a06 #s-contacts_full .s-Grid_cell_2": {
                      "attributes": {
                        "background-color": "#EEEFF9"
                      }
                    }
                  },{
                    "#s-1588a5ef-bb0c-412d-bec8-f1a537707a06 #s-contacts_full .s-Grid_cell_2": {
                      "attributes-ie": {
                        "-pie-background": "#EEEFF9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_Options" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ ".s-Input_7" ],
                    "value": "true"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "contactsCheckOff" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "contactsCheckOff"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });