function initData() {
  jimData.variables["timeRespond"] = "";
  jimData.variables["imageSelected"] = "";
  jimData.variables["imageAttached"] = "";
  jimData.variables["contactLink"] = "";
  jimData.variables["contactsCheckOff"] = "0";
  jimData.variables["checkOn"] = "0";
  jimData.variables["autoDialogSelected"] = "";
  jimData.variables["chatPicSelected"] = "";
  jimData.variables["contactChatSelected"] = "";
  jimData.variables["chatNameSelected"] = "";
  jimData.datamasters["chatDialogs-Emily"] = [
  ];

  jimData.datamasters["chatDialogs-Adam"] = [
    {
      "id": 1,
      "datamaster": "chatDialogs-Adam",
      "userdata": {
        "PictureTo": "./images/4ee15b82-6802-43d2-b493-4fb78ceb10ec.png",
        "DialogTo": "Hello! Can you talk?",
        "TimeTo": "10:13:03",
        "PictureFrom": "./images/fa62068f-f3fd-43fe-a3b9-648bf36542f3.png",
        "DialogFrom": "sorry, no right now",
        "TimeFrom": "10:13:56",
        "Attachment": "./resources/jim/images/common/crossimage.png"
      }
    },
    {
      "id": 2,
      "datamaster": "chatDialogs-Adam",
      "userdata": {
        "PictureTo": "./images/534ae008-0913-4f28-87b6-5a1220fe8269.png",
        "DialogTo": "Ok let me know as soon you can",
        "TimeTo": "10:14:27",
        "PictureFrom": "./images/6b4fafac-4cd5-4f40-b6f0-77820c95708e.png",
        "DialogFrom": "0k",
        "TimeFrom": "10:14:45",
        "Attachment": "./resources/jim/images/common/crossimage.png"
      }
    }
  ];

  jimData.datamasters["chatDialogs-Susan"] = [
    {
      "id": 1,
      "datamaster": "chatDialogs-Susan",
      "userdata": {
        "PictureTo": "./images/4ee15b82-6802-43d2-b493-4fb78ceb10ec.png",
        "DialogTo": "so, you can go?",
        "TimeTo": "10:33:43",
        "PictureFrom": "./images/062504b9-920e-49da-ada1-59dec2a5bb62.png",
        "DialogFrom": "I'll will try",
        "TimeFrom": "10:35:21",
        "Attachment": "./resources/jim/images/common/crossimage.png"
      }
    },
    {
      "id": 2,
      "datamaster": "chatDialogs-Susan",
      "userdata": {
        "PictureTo": "./images/534ae008-0913-4f28-87b6-5a1220fe8269.png",
        "DialogTo": "Ok let me know",
        "TimeTo": "10:38:57",
        "PictureFrom": "./images/b7c5666b-2400-4f37-bd32-e689d9d3fe71.png",
        "DialogFrom": "yes",
        "TimeFrom": "10:40:05",
        "Attachment": "./resources/jim/images/common/crossimage.png"
      }
    }
  ];

  jimData.datamasters["chatDialogs-Eli"] = [
  ];

  jimData.datamasters["contactsList"] = [
    {
      "id": 1,
      "datamaster": "contactsList",
      "userdata": {
        "Picture": "./images/4543ef1c-b775-45c6-815e-90d15c8cf603.png",
        "Name": "Susan James",
        "Status": "Non stop!",
        "Checked": "false"
      }
    },
    {
      "id": 2,
      "datamaster": "contactsList",
      "userdata": {
        "Picture": "./images/6af67c2a-2eeb-4bd5-a333-ad3befef20ee.png",
        "Name": "Thomas Hawkings",
        "Status": "Available",
        "Checked": "false"
      }
    },
    {
      "id": 3,
      "datamaster": "contactsList",
      "userdata": {
        "Picture": "./images/49129a0a-0f7f-45ac-be36-bab9509f287d.png",
        "Name": "Adam Black",
        "Status": "Available",
        "Checked": "false"
      }
    },
    {
      "id": 4,
      "datamaster": "contactsList",
      "userdata": {
        "Picture": "./images/5a4542d5-b596-4626-9470-ce86195b3c71.png",
        "Name": "Eli Johnson",
        "Status": "The best is vet to come!",
        "Checked": "false"
      }
    },
    {
      "id": 5,
      "datamaster": "contactsList",
      "userdata": {
        "Picture": "./images/0e3de479-d35f-40a3-ad55-1084e34bd75b.png",
        "Name": "Emily Stewart",
        "Status": "Hello world!",
        "Checked": "false"
      }
    }
  ];

  jimData.datamasters["chatDialogs-Thomas"] = [
    {
      "id": 1,
      "datamaster": "chatDialogs-Thomas",
      "userdata": {
        "PictureTo": "./images/5560dd62-4514-4a93-905d-b9f8dce55a14.png",
        "DialogTo": "Hi Thomas, Are you with Karen?",
        "TimeTo": "10:30:23",
        "PictureFrom": "./images/a1b847c4-5bbb-4231-afb5-6133b6fe1594.png",
        "DialogFrom": "No, I'm not",
        "TimeFrom": "10:31:34",
        "Attachment": "./resources/jim/images/common/crossimage.png"
      }
    },
    {
      "id": 2,
      "datamaster": "chatDialogs-Thomas",
      "userdata": {
        "PictureTo": "./images/5e9b496a-e3f4-480f-90b7-5b547fb89560.png",
        "DialogTo": "Do you know where she is?",
        "TimeTo": "10:32:10",
        "PictureFrom": "./images/5b82775f-0aff-4b07-b4a3-076abc3f3049.png",
        "DialogFrom": "at her's mom, I think",
        "TimeFrom": "10:32:58",
        "Attachment": "./resources/jim/images/common/crossimage.png"
      }
    },
    {
      "id": 3,
      "datamaster": "chatDialogs-Thomas",
      "userdata": {
        "PictureTo": "./images/98bdd786-65a1-46ca-aeda-a13dc6628ff3.png",
        "DialogTo": "Ok thanks",
        "TimeTo": "10:33:38",
        "PictureFrom": "./images/d11e68ff-40a8-4d04-8141-815f76cb6dd1.png",
        "DialogFrom": "your welcome",
        "TimeFrom": "10:34:49",
        "Attachment": "./resources/jim/images/common/crossimage.png"
      }
    }
  ];

  jimData.datamasters["chatAutoResponses"] = [
    {
      "id": 1,
      "datamaster": "chatAutoResponses",
      "userdata": {
        "Dialog": "are you serious?"
      }
    },
    {
      "id": 2,
      "datamaster": "chatAutoResponses",
      "userdata": {
        "Dialog": "could be"
      }
    },
    {
      "id": 3,
      "datamaster": "chatAutoResponses",
      "userdata": {
        "Dialog": "oh!"
      }
    },
    {
      "id": 4,
      "datamaster": "chatAutoResponses",
      "userdata": {
        "Dialog": "please be more specific"
      }
    },
    {
      "id": 5,
      "datamaster": "chatAutoResponses",
      "userdata": {
        "Dialog": "i don't understand"
      }
    }
  ];

  jimData.datamasters["fullGallery"] = [
    {
      "id": 1,
      "datamaster": "fullGallery",
      "userdata": {
        "Image": "./images/da532adb-2a13-4a19-805c-4616714b062f.png",
        "Checked": "false"
      }
    },
    {
      "id": 2,
      "datamaster": "fullGallery",
      "userdata": {
        "Image": "./images/ad779b20-3e35-49ce-83ac-3703e46fe92b.png",
        "Checked": "false"
      }
    },
    {
      "id": 3,
      "datamaster": "fullGallery",
      "userdata": {
        "Image": "./images/452e7302-a728-4e18-8cf4-4c7ba71f9a96.png",
        "Checked": "false"
      }
    },
    {
      "id": 4,
      "datamaster": "fullGallery",
      "userdata": {
        "Image": "./images/21c07b9d-8f4c-489e-a1dd-31f227a405ec.png",
        "Checked": "false"
      }
    },
    {
      "id": 5,
      "datamaster": "fullGallery",
      "userdata": {
        "Image": "./images/23080e59-0e19-47d6-bd7a-805211b0929e.png",
        "Checked": "false"
      }
    },
    {
      "id": 6,
      "datamaster": "fullGallery",
      "userdata": {
        "Image": "./images/bb9f50ef-c054-4249-8c36-88a7a2ef341b.png",
        "Checked": "false"
      }
    },
    {
      "id": 7,
      "datamaster": "fullGallery",
      "userdata": {
        "Image": "./images/c88ba49f-9807-4036-a08f-5192119591d2.png",
        "Checked": "false"
      }
    },
    {
      "id": 8,
      "datamaster": "fullGallery",
      "userdata": {
        "Image": "./images/3f0f7922-34f0-47b1-9a74-9994913bfec8.png",
        "Checked": "false"
      }
    },
    {
      "id": 9,
      "datamaster": "fullGallery",
      "userdata": {
        "Image": "./images/76fe9ab2-7cba-465c-aefd-dd224c2d6fc5.png",
        "Checked": "false"
      }
    },
    {
      "id": 10,
      "datamaster": "fullGallery",
      "userdata": {
        "Image": "./images/73f773c7-9561-434b-a183-66a8813a3ade.png",
        "Checked": "false"
      }
    },
    {
      "id": 11,
      "datamaster": "fullGallery",
      "userdata": {
        "Image": "./images/11946593-f450-43fd-817f-42cd832fae51.png",
        "Checked": "false"
      }
    },
    {
      "id": 12,
      "datamaster": "fullGallery",
      "userdata": {
        "Image": "./images/a8c6d52e-5833-4757-9233-6b4c7afd48bf.png",
        "Checked": "false"
      }
    },
    {
      "id": 13,
      "datamaster": "fullGallery",
      "userdata": {
        "Image": "./images/f18b6bc9-6d48-446c-a78e-1808e78713fd.png",
        "Checked": "false"
      }
    },
    {
      "id": 14,
      "datamaster": "fullGallery",
      "userdata": {
        "Image": "./images/70e5641a-945c-4569-a410-b2ff8b020f8b.png",
        "Checked": "false"
      }
    },
    {
      "id": 15,
      "datamaster": "fullGallery",
      "userdata": {
        "Image": "./images/9f8d7023-0027-4ed5-8823-1728854aceef.png",
        "Checked": "false"
      }
    },
    {
      "id": 16,
      "datamaster": "fullGallery",
      "userdata": {
        "Image": "./images/6916a53f-c5e4-4e60-858e-94ae3618fac5.png",
        "Checked": "false"
      }
    },
    {
      "id": 17,
      "datamaster": "fullGallery",
      "userdata": {
        "Image": "./images/811b6863-f1e7-4d50-a771-a2302a618e08.png",
        "Checked": "false"
      }
    },
    {
      "id": 18,
      "datamaster": "fullGallery",
      "userdata": {
        "Image": "./images/a9afd754-8d08-4d3e-8c0b-9ceac5a38667.png",
        "Checked": "false"
      }
    }
  ];

  jimData.datamasters["chatsList"] = [
    {
      "id": 1,
      "datamaster": "chatsList",
      "userdata": {
        "Picture": "./images/4543ef1c-b775-45c6-815e-90d15c8cf603.png",
        "Name": "Susan James",
        "Status": "Non stop!",
        "Checked": "false",
        "TimeLastChat": "10:40"
      }
    },
    {
      "id": 2,
      "datamaster": "chatsList",
      "userdata": {
        "Picture": "./images/6af67c2a-2eeb-4bd5-a333-ad3befef20ee.png",
        "Name": "Thomas Hawkings",
        "Status": "Available",
        "Checked": "false",
        "TimeLastChat": "10:34"
      }
    },
    {
      "id": 3,
      "datamaster": "chatsList",
      "userdata": {
        "Picture": "./images/49129a0a-0f7f-45ac-be36-bab9509f287d.png",
        "Name": "Adam Black",
        "Status": "Available",
        "Checked": "false",
        "TimeLastChat": "10:14"
      }
    }
  ];

  jimData.isInitialized = true;
}