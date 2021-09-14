var gdjs;
(function(gdjs2) {
  const DraggableRuntimeBehavior2 = class extends gdjs2.RuntimeBehavior {
    constructor(runtimeScene, behaviorData, owner) {
      super(runtimeScene, behaviorData, owner);
      this._dragged = false;
      this._touchId = null;
      this._mouse = false;
      this._xOffset = 0;
      this._yOffset = 0;
    }
    updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
      return true;
    }
    onDeActivate() {
      this._endDrag();
    }
    onDestroy() {
      this.onDeActivate();
    }
    _endDrag() {
      if (this._dragged && this._mouse) {
        DraggableRuntimeBehavior2.mouseDraggingSomething = false;
      }
      if (this._dragged && this._touchId !== null) {
        DraggableRuntimeBehavior2.touchDraggingSomething[this._touchId] = false;
      }
      this._dragged = false;
      this._mouse = false;
      this._touchId = null;
    }
    _tryBeginDrag(runtimeScene) {
      if (this._dragged) {
        return false;
      }
      const inputManager = runtimeScene.getGame().getInputManager();
      if (inputManager.isMouseButtonPressed(0) && !DraggableRuntimeBehavior2.leftPressedLastFrame && !DraggableRuntimeBehavior2.mouseDraggingSomething) {
        const mousePos = runtimeScene.getLayer(this.owner.getLayer()).convertCoords(inputManager.getMouseX(), inputManager.getMouseY());
        if (this.owner.insideObject(mousePos[0], mousePos[1])) {
          this._dragged = true;
          this._mouse = true;
          this._xOffset = mousePos[0] - this.owner.getX();
          this._yOffset = mousePos[1] - this.owner.getY();
          DraggableRuntimeBehavior2.mouseDraggingSomething = true;
          return true;
        }
      } else {
        const touchIds = inputManager.getStartedTouchIdentifiers();
        for (let i = 0; i < touchIds.length; ++i) {
          if (DraggableRuntimeBehavior2.touchDraggingSomething[touchIds[i]]) {
            continue;
          }
          const touchPos = runtimeScene.getLayer(this.owner.getLayer()).convertCoords(inputManager.getTouchX(touchIds[i]), inputManager.getTouchY(touchIds[i]));
          if (this.owner.insideObject(touchPos[0], touchPos[1])) {
            this._dragged = true;
            this._touchId = touchIds[i];
            this._xOffset = touchPos[0] - this.owner.getX();
            this._yOffset = touchPos[1] - this.owner.getY();
            DraggableRuntimeBehavior2.touchDraggingSomething[touchIds[i]] = true;
            return true;
          }
        }
      }
      return false;
    }
    _shouldEndDrag(runtimeScene) {
      if (!this._dragged) {
        return false;
      }
      const inputManager = runtimeScene.getGame().getInputManager();
      if (this._mouse) {
        return !inputManager.isMouseButtonPressed(0);
      } else {
        if (this._touchId !== null) {
          return inputManager.getAllTouchIdentifiers().indexOf(this._touchId) === -1;
        }
      }
      return false;
    }
    _updateObjectPosition(runtimeScene) {
      if (!this._dragged) {
        return false;
      }
      const inputManager = runtimeScene.getGame().getInputManager();
      if (this._mouse) {
        const mousePos = runtimeScene.getLayer(this.owner.getLayer()).convertCoords(inputManager.getMouseX(), inputManager.getMouseY());
        this.owner.setX(mousePos[0] - this._xOffset);
        this.owner.setY(mousePos[1] - this._yOffset);
      } else {
        if (this._touchId !== null) {
          const touchPos = runtimeScene.getLayer(this.owner.getLayer()).convertCoords(inputManager.getTouchX(this._touchId), inputManager.getTouchY(this._touchId));
          this.owner.setX(touchPos[0] - this._xOffset);
          this.owner.setY(touchPos[1] - this._yOffset);
        }
      }
      return true;
    }
    doStepPreEvents(runtimeScene) {
      this._tryBeginDrag(runtimeScene);
      if (this._shouldEndDrag(runtimeScene)) {
        this._endDrag();
      }
      this._updateObjectPosition(runtimeScene);
    }
    doStepPostEvents(runtimeScene) {
      DraggableRuntimeBehavior2.leftPressedLastFrame = runtimeScene.getGame().getInputManager().isMouseButtonPressed(0);
    }
    isDragged(runtimeScene) {
      return this._dragged;
    }
  };
  let DraggableRuntimeBehavior = DraggableRuntimeBehavior2;
  DraggableRuntimeBehavior.mouseDraggingSomething = false;
  DraggableRuntimeBehavior.touchDraggingSomething = [];
  DraggableRuntimeBehavior.leftPressedLastFrame = false;
  gdjs2.DraggableRuntimeBehavior = DraggableRuntimeBehavior;
  gdjs2.registerBehavior("DraggableBehavior::Draggable", gdjs2.DraggableRuntimeBehavior);
})(gdjs || (gdjs = {}));
//# sourceMappingURL=draggableruntimebehavior.js.map
