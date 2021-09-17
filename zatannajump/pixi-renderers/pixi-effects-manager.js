var gdjs;
(function(gdjs2) {
  const PIXI = GlobalPIXIModule.PIXI;
  class PixiEffectsManager {
    initializeEffect(effectData, rendererEffects, target) {
      const filterCreator = gdjs2.PixiFiltersTools.getFilterCreator(effectData.effectType);
      if (!filterCreator) {
        console.log('Effect "' + effectData.name + '" has an unknown effect type: "' + effectData.effectType + '". Was it registered properly? Is the effect type correct?');
        return false;
      }
      const filter = {
        pixiFilter: filterCreator.makePIXIFilter(target, effectData),
        updateDoubleParameter: filterCreator.updateDoubleParameter,
        updateStringParameter: filterCreator.updateStringParameter,
        updateBooleanParameter: filterCreator.updateBooleanParameter,
        updatePreRender: filterCreator.updatePreRender
      };
      if (target.isLightingLayer && target.isLightingLayer()) {
        filter.pixiFilter.blendMode = PIXI.BLEND_MODES.ADD;
      }
      rendererEffects[effectData.name] = filter;
      return true;
    }
    applyEffect(rendererObject, effect) {
      rendererObject.filters = (rendererObject.filters || []).concat(effect.pixiFilter);
      return true;
    }
    updatePreRender(rendererEffects, target) {
      for (const filterName in rendererEffects) {
        const filter = rendererEffects[filterName];
        filter.updatePreRender(filter.pixiFilter, target);
      }
    }
    addEffect(effectData, rendererEffects, rendererObject, target) {
      let effectAdded = true;
      effectAdded = this.initializeEffect(effectData, rendererEffects, target) && effectAdded;
      effectAdded = this.updateAllEffectParameters(rendererEffects, effectData) && effectAdded;
      effectAdded = this.applyEffect(rendererObject, rendererEffects[effectData.name]) && effectAdded;
      return effectAdded;
    }
    removeEffect(rendererEffects, rendererObject, effectName) {
      const filter = rendererEffects[effectName];
      if (!filter)
        return false;
      rendererObject.filters = (rendererObject.filters || []).filter((pixiFilter) => pixiFilter !== filter.pixiFilter);
      delete rendererEffects[effectName];
      return true;
    }
    setEffectDoubleParameter(rendererEffects, name, parameterName, value) {
      const filter = rendererEffects[name];
      if (!filter)
        return false;
      filter.updateDoubleParameter(filter.pixiFilter, parameterName, value);
      return true;
    }
    setEffectStringParameter(rendererEffects, name, parameterName, value) {
      const filter = rendererEffects[name];
      if (!filter)
        return false;
      filter.updateStringParameter(filter.pixiFilter, parameterName, value);
      return true;
    }
    setEffectBooleanParameter(rendererEffects, name, parameterName, value) {
      const filter = rendererEffects[name];
      if (!filter)
        return false;
      filter.updateBooleanParameter(filter.pixiFilter, parameterName, value);
      return true;
    }
    updateAllEffectParameters(rendererEffects, effectData) {
      let updatedDoubles = true;
      let updatedStrings = true;
      let updatedBooleans = true;
      for (let name in effectData.doubleParameters) {
        updatedDoubles = this.setEffectDoubleParameter(rendererEffects, effectData.name, name, effectData.doubleParameters[name]) && updatedDoubles;
      }
      for (let name in effectData.stringParameters) {
        updatedStrings = this.setEffectStringParameter(rendererEffects, effectData.name, name, effectData.stringParameters[name]) && updatedStrings;
      }
      for (let name in effectData.booleanParameters) {
        updatedBooleans = this.setEffectBooleanParameter(rendererEffects, effectData.name, name, effectData.booleanParameters[name]) && updatedBooleans;
      }
      return updatedDoubles && updatedStrings && updatedBooleans;
    }
    hasEffect(rendererEffects, name) {
      return !!rendererEffects[name];
    }
    enableEffect(rendererEffects, name, value) {
      const filter = rendererEffects[name];
      if (!filter)
        return;
      gdjs2.PixiFiltersTools.enableEffect(filter, value);
    }
    isEffectEnabled(rendererEffects, name) {
      const filter = rendererEffects[name];
      if (!filter)
        return false;
      return gdjs2.PixiFiltersTools.isEffectEnabled(filter);
    }
  }
  gdjs2.EffectsManager = PixiEffectsManager;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=pixi-effects-manager.js.map
