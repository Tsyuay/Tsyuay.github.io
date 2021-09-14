var gdjs;
(function(gdjs2) {
  class LinksManager {
    constructor() {
      this.links = {};
    }
    static getManager(runtimeScene) {
      if (!runtimeScene.linkedObjectsManager) {
        runtimeScene.linkedObjectsManager = new gdjs2.LinksManager();
      }
      return runtimeScene.linkedObjectsManager;
    }
    getObjectsLinkedWith(objA) {
      if (!this.links.hasOwnProperty(objA.id)) {
        this.links[objA.id] = [];
      }
      return this.links[objA.id];
    }
    linkObjects(objA, objB) {
      const objALinkedObjects = this.getObjectsLinkedWith(objA);
      if (objALinkedObjects.indexOf(objB) === -1) {
        objALinkedObjects.push(objB);
      }
      const objBLinkedObjects = this.getObjectsLinkedWith(objB);
      if (objBLinkedObjects.indexOf(objA) === -1) {
        objBLinkedObjects.push(objA);
      }
    }
    removeAllLinksOf(obj) {
      const objLinkedObjects = this.getObjectsLinkedWith(obj);
      for (let i = 0; i < objLinkedObjects.length; i++) {
        if (this.links.hasOwnProperty(objLinkedObjects[i].id)) {
          const otherObjList = this.links[objLinkedObjects[i].id];
          const index = otherObjList.indexOf(obj);
          if (index !== -1) {
            otherObjList.splice(index, 1);
          }
        }
      }
      if (this.links.hasOwnProperty(obj.id)) {
        delete this.links[obj.id];
      }
    }
    removeLinkBetween(objA, objB) {
      if (this.links.hasOwnProperty(objA.id)) {
        const list = this.links[objA.id];
        const index = list.indexOf(objB);
        if (index !== -1) {
          list.splice(index, 1);
        }
      }
      if (this.links.hasOwnProperty(objB.id)) {
        const list = this.links[objB.id];
        const index = list.indexOf(objA);
        if (index !== -1) {
          list.splice(index, 1);
        }
      }
    }
  }
  gdjs2.LinksManager = LinksManager;
  let evtTools;
  (function(evtTools2) {
    let linkedObjects;
    (function(linkedObjects2) {
      gdjs2.registerObjectDeletedFromSceneCallback(function(runtimeScene, obj) {
        LinksManager.getManager(runtimeScene).removeAllLinksOf(obj);
      });
      linkedObjects2.linkObjects = function(runtimeScene, objA, objB) {
        if (objA === null || objB === null) {
          return;
        }
        LinksManager.getManager(runtimeScene).linkObjects(objA, objB);
      };
      linkedObjects2.removeLinkBetween = function(runtimeScene, objA, objB) {
        if (objA === null || objB === null) {
          return;
        }
        LinksManager.getManager(runtimeScene).removeLinkBetween(objA, objB);
      };
      linkedObjects2.removeAllLinksOf = function(runtimeScene, objA) {
        if (objA === null) {
          return;
        }
        LinksManager.getManager(runtimeScene).removeAllLinksOf(objA);
      };
      linkedObjects2._objectIsInList = function(obj, linkedObjects3) {
        return linkedObjects3.indexOf(obj) !== -1;
      };
      linkedObjects2.pickObjectsLinkedTo = function(runtimeScene, objectsLists, obj) {
        if (obj === null) {
          return false;
        }
        const linkedObjects3 = LinksManager.getManager(runtimeScene).getObjectsLinkedWith(obj);
        return gdjs2.evtTools.object.pickObjectsIf(gdjs2.evtTools.linkedObjects._objectIsInList, objectsLists, false, linkedObjects3);
      };
    })(linkedObjects = evtTools2.linkedObjects || (evtTools2.linkedObjects = {}));
  })(evtTools = gdjs2.evtTools || (gdjs2.evtTools = {}));
})(gdjs || (gdjs = {}));
//# sourceMappingURL=linkedobjects.js.map
