gdjs.MapCode = {};
gdjs.MapCode.GDMenuBGObjects1= [];
gdjs.MapCode.GDMenuBGObjects2= [];
gdjs.MapCode.GDMenuBGObjects3= [];
gdjs.MapCode.GDMapObjects1= [];
gdjs.MapCode.GDMapObjects2= [];
gdjs.MapCode.GDMapObjects3= [];
gdjs.MapCode.GDMoonObjects1= [];
gdjs.MapCode.GDMoonObjects2= [];
gdjs.MapCode.GDMoonObjects3= [];
gdjs.MapCode.GDClearMemoryButtonObjects1= [];
gdjs.MapCode.GDClearMemoryButtonObjects2= [];
gdjs.MapCode.GDClearMemoryButtonObjects3= [];
gdjs.MapCode.GDBackButtonObjects1= [];
gdjs.MapCode.GDBackButtonObjects2= [];
gdjs.MapCode.GDBackButtonObjects3= [];
gdjs.MapCode.GDResetMemorytxtObjects1= [];
gdjs.MapCode.GDResetMemorytxtObjects2= [];
gdjs.MapCode.GDResetMemorytxtObjects3= [];
gdjs.MapCode.GDBackButtontxtObjects1= [];
gdjs.MapCode.GDBackButtontxtObjects2= [];
gdjs.MapCode.GDBackButtontxtObjects3= [];
gdjs.MapCode.GDLvl8BtnObjects1= [];
gdjs.MapCode.GDLvl8BtnObjects2= [];
gdjs.MapCode.GDLvl8BtnObjects3= [];
gdjs.MapCode.GDLvl7BtnObjects1= [];
gdjs.MapCode.GDLvl7BtnObjects2= [];
gdjs.MapCode.GDLvl7BtnObjects3= [];
gdjs.MapCode.GDLvl6BtnObjects1= [];
gdjs.MapCode.GDLvl6BtnObjects2= [];
gdjs.MapCode.GDLvl6BtnObjects3= [];
gdjs.MapCode.GDLvl5BtnObjects1= [];
gdjs.MapCode.GDLvl5BtnObjects2= [];
gdjs.MapCode.GDLvl5BtnObjects3= [];
gdjs.MapCode.GDLvl4BtnObjects1= [];
gdjs.MapCode.GDLvl4BtnObjects2= [];
gdjs.MapCode.GDLvl4BtnObjects3= [];
gdjs.MapCode.GDLvl3BtnObjects1= [];
gdjs.MapCode.GDLvl3BtnObjects2= [];
gdjs.MapCode.GDLvl3BtnObjects3= [];
gdjs.MapCode.GDLvl2BtnObjects1= [];
gdjs.MapCode.GDLvl2BtnObjects2= [];
gdjs.MapCode.GDLvl2BtnObjects3= [];
gdjs.MapCode.GDLvl1BtnObjects1= [];
gdjs.MapCode.GDLvl1BtnObjects2= [];
gdjs.MapCode.GDLvl1BtnObjects3= [];
gdjs.MapCode.GDLevel8BtnTextObjects1= [];
gdjs.MapCode.GDLevel8BtnTextObjects2= [];
gdjs.MapCode.GDLevel8BtnTextObjects3= [];
gdjs.MapCode.GDLevel7BtnTextObjects1= [];
gdjs.MapCode.GDLevel7BtnTextObjects2= [];
gdjs.MapCode.GDLevel7BtnTextObjects3= [];
gdjs.MapCode.GDLevel6BtnTextObjects1= [];
gdjs.MapCode.GDLevel6BtnTextObjects2= [];
gdjs.MapCode.GDLevel6BtnTextObjects3= [];
gdjs.MapCode.GDLevel5BtnTextObjects1= [];
gdjs.MapCode.GDLevel5BtnTextObjects2= [];
gdjs.MapCode.GDLevel5BtnTextObjects3= [];
gdjs.MapCode.GDLevel4BtnTextObjects1= [];
gdjs.MapCode.GDLevel4BtnTextObjects2= [];
gdjs.MapCode.GDLevel4BtnTextObjects3= [];
gdjs.MapCode.GDLevel3BtnTextObjects1= [];
gdjs.MapCode.GDLevel3BtnTextObjects2= [];
gdjs.MapCode.GDLevel3BtnTextObjects3= [];
gdjs.MapCode.GDLevel2BtnTextObjects1= [];
gdjs.MapCode.GDLevel2BtnTextObjects2= [];
gdjs.MapCode.GDLevel2BtnTextObjects3= [];
gdjs.MapCode.GDLevel1BtnTextObjects1= [];
gdjs.MapCode.GDLevel1BtnTextObjects2= [];
gdjs.MapCode.GDLevel1BtnTextObjects3= [];

gdjs.MapCode.conditionTrue_0 = {val:false};
gdjs.MapCode.condition0IsTrue_0 = {val:false};
gdjs.MapCode.condition1IsTrue_0 = {val:false};
gdjs.MapCode.condition2IsTrue_0 = {val:false};


gdjs.MapCode.mapOfGDgdjs_46MapCode_46GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.MapCode.GDBackButtonObjects1});gdjs.MapCode.eventsList0 = function(runtimeScene) {

{


gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MapCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};gdjs.MapCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Lvl1Btn"), gdjs.MapCode.GDLvl1BtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Lvl2Btn"), gdjs.MapCode.GDLvl2BtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Lvl3Btn"), gdjs.MapCode.GDLvl3BtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Lvl4Btn"), gdjs.MapCode.GDLvl4BtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Lvl5Btn"), gdjs.MapCode.GDLvl5BtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Lvl6Btn"), gdjs.MapCode.GDLvl6BtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Lvl7Btn"), gdjs.MapCode.GDLvl7BtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Lvl8Btn"), gdjs.MapCode.GDLvl8BtnObjects2);
{gdjs.evtTools.storage.readStringFromJSONFile("LevelStatus", "Level1", runtimeScene, runtimeScene.getVariables().getFromIndex(0).getChild("Level1"));
}{for(var i = 0, len = gdjs.MapCode.GDLvl1BtnObjects2.length ;i < len;++i) {
    gdjs.MapCode.GDLvl1BtnObjects2[i].returnVariable(gdjs.MapCode.GDLvl1BtnObjects2[i].getVariables().get("status")).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("Level1")));
}
}{gdjs.evtTools.storage.readStringFromJSONFile("LevelStatus", "Level2", runtimeScene, runtimeScene.getVariables().getFromIndex(0).getChild("Level2"));
}{for(var i = 0, len = gdjs.MapCode.GDLvl2BtnObjects2.length ;i < len;++i) {
    gdjs.MapCode.GDLvl2BtnObjects2[i].returnVariable(gdjs.MapCode.GDLvl2BtnObjects2[i].getVariables().get("status")).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("Level2")));
}
}{gdjs.evtTools.storage.readStringFromJSONFile("LevelStatus", "Level3", runtimeScene, runtimeScene.getVariables().getFromIndex(0).getChild("Level3"));
}{for(var i = 0, len = gdjs.MapCode.GDLvl3BtnObjects2.length ;i < len;++i) {
    gdjs.MapCode.GDLvl3BtnObjects2[i].returnVariable(gdjs.MapCode.GDLvl3BtnObjects2[i].getVariables().get("status")).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("Level3")));
}
}{gdjs.evtTools.storage.readStringFromJSONFile("LevelStatus", "Level4", runtimeScene, runtimeScene.getVariables().getFromIndex(0).getChild("Level4"));
}{for(var i = 0, len = gdjs.MapCode.GDLvl4BtnObjects2.length ;i < len;++i) {
    gdjs.MapCode.GDLvl4BtnObjects2[i].returnVariable(gdjs.MapCode.GDLvl4BtnObjects2[i].getVariables().get("status")).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("Level4")));
}
}{gdjs.evtTools.storage.readStringFromJSONFile("LevelStatus", "Level5", runtimeScene, runtimeScene.getVariables().getFromIndex(0).getChild("Level5"));
}{for(var i = 0, len = gdjs.MapCode.GDLvl5BtnObjects2.length ;i < len;++i) {
    gdjs.MapCode.GDLvl5BtnObjects2[i].returnVariable(gdjs.MapCode.GDLvl5BtnObjects2[i].getVariables().get("status")).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("Level5")));
}
}{gdjs.evtTools.storage.readStringFromJSONFile("LevelStatus", "Level6", runtimeScene, runtimeScene.getVariables().getFromIndex(0).getChild("Level6"));
}{for(var i = 0, len = gdjs.MapCode.GDLvl6BtnObjects2.length ;i < len;++i) {
    gdjs.MapCode.GDLvl6BtnObjects2[i].returnVariable(gdjs.MapCode.GDLvl6BtnObjects2[i].getVariables().get("status")).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("Level6")));
}
}{gdjs.evtTools.storage.readStringFromJSONFile("LevelStatus", "Level7", runtimeScene, runtimeScene.getVariables().getFromIndex(0).getChild("Level7"));
}{for(var i = 0, len = gdjs.MapCode.GDLvl7BtnObjects2.length ;i < len;++i) {
    gdjs.MapCode.GDLvl7BtnObjects2[i].returnVariable(gdjs.MapCode.GDLvl7BtnObjects2[i].getVariables().get("status")).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("Level7")));
}
}{gdjs.evtTools.storage.readStringFromJSONFile("LevelStatus", "Level8", runtimeScene, runtimeScene.getVariables().getFromIndex(0).getChild("Level7"));
}{for(var i = 0, len = gdjs.MapCode.GDLvl8BtnObjects2.length ;i < len;++i) {
    gdjs.MapCode.GDLvl8BtnObjects2[i].returnVariable(gdjs.MapCode.GDLvl8BtnObjects2[i].getVariables().get("status")).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("Level8")));
}
}}

}


};gdjs.MapCode.eventsList2 = function(runtimeScene) {

{



}


{



}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("LevelStatus", "Level1");
}if (gdjs.MapCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MapCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.MapCode.eventsList3 = function(runtimeScene) {

{


gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MapCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MapCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Lvl1Btn"), gdjs.MapCode.GDLvl1BtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lvl2Btn"), gdjs.MapCode.GDLvl2BtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lvl3Btn"), gdjs.MapCode.GDLvl3BtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lvl4Btn"), gdjs.MapCode.GDLvl4BtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lvl5Btn"), gdjs.MapCode.GDLvl5BtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lvl6Btn"), gdjs.MapCode.GDLvl6BtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lvl7Btn"), gdjs.MapCode.GDLvl7BtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lvl8Btn"), gdjs.MapCode.GDLvl8BtnObjects1);
{for(var i = 0, len = gdjs.MapCode.GDLvl1BtnObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDLvl1BtnObjects1[i].setAnimationName("LevelButtons.VariableString(status)");
}
for(var i = 0, len = gdjs.MapCode.GDLvl2BtnObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDLvl2BtnObjects1[i].setAnimationName("LevelButtons.VariableString(status)");
}
for(var i = 0, len = gdjs.MapCode.GDLvl3BtnObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDLvl3BtnObjects1[i].setAnimationName("LevelButtons.VariableString(status)");
}
for(var i = 0, len = gdjs.MapCode.GDLvl4BtnObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDLvl4BtnObjects1[i].setAnimationName("LevelButtons.VariableString(status)");
}
for(var i = 0, len = gdjs.MapCode.GDLvl5BtnObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDLvl5BtnObjects1[i].setAnimationName("LevelButtons.VariableString(status)");
}
for(var i = 0, len = gdjs.MapCode.GDLvl6BtnObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDLvl6BtnObjects1[i].setAnimationName("LevelButtons.VariableString(status)");
}
for(var i = 0, len = gdjs.MapCode.GDLvl7BtnObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDLvl7BtnObjects1[i].setAnimationName("LevelButtons.VariableString(status)");
}
for(var i = 0, len = gdjs.MapCode.GDLvl8BtnObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDLvl8BtnObjects1[i].setAnimationName("LevelButtons.VariableString(status)");
}
}}

}


};gdjs.MapCode.mapOfGDgdjs_46MapCode_46GDLvl1BtnObjects2Objects = Hashtable.newFrom({"Lvl1Btn": gdjs.MapCode.GDLvl1BtnObjects2});gdjs.MapCode.mapOfGDgdjs_46MapCode_46GDLvl2BtnObjects2Objects = Hashtable.newFrom({"Lvl2Btn": gdjs.MapCode.GDLvl2BtnObjects2});gdjs.MapCode.mapOfGDgdjs_46MapCode_46GDLvl3BtnObjects2Objects = Hashtable.newFrom({"Lvl3Btn": gdjs.MapCode.GDLvl3BtnObjects2});gdjs.MapCode.mapOfGDgdjs_46MapCode_46GDLvl4BtnObjects2Objects = Hashtable.newFrom({"Lvl4Btn": gdjs.MapCode.GDLvl4BtnObjects2});gdjs.MapCode.mapOfGDgdjs_46MapCode_46GDLvl5BtnObjects2Objects = Hashtable.newFrom({"Lvl5Btn": gdjs.MapCode.GDLvl5BtnObjects2});gdjs.MapCode.mapOfGDgdjs_46MapCode_46GDLvl6BtnObjects2Objects = Hashtable.newFrom({"Lvl6Btn": gdjs.MapCode.GDLvl6BtnObjects2});gdjs.MapCode.mapOfGDgdjs_46MapCode_46GDLvl7BtnObjects2Objects = Hashtable.newFrom({"Lvl7Btn": gdjs.MapCode.GDLvl7BtnObjects2});gdjs.MapCode.mapOfGDgdjs_46MapCode_46GDLvl8BtnObjects1Objects = Hashtable.newFrom({"Lvl8Btn": gdjs.MapCode.GDLvl8BtnObjects1});gdjs.MapCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Lvl1Btn"), gdjs.MapCode.GDLvl1BtnObjects2);

gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MapCode.mapOfGDgdjs_46MapCode_46GDLvl1BtnObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MapCode.GDLvl1BtnObjects2.length;i<l;++i) {
    if ( gdjs.MapCode.GDLvl1BtnObjects2[i].getVariableString(gdjs.MapCode.GDLvl1BtnObjects2[i].getVariables().get("status")) == "Unlocked" ) {
        gdjs.MapCode.condition1IsTrue_0.val = true;
        gdjs.MapCode.GDLvl1BtnObjects2[k] = gdjs.MapCode.GDLvl1BtnObjects2[i];
        ++k;
    }
}
gdjs.MapCode.GDLvl1BtnObjects2.length = k;}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lvl2Btn"), gdjs.MapCode.GDLvl2BtnObjects2);

gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MapCode.mapOfGDgdjs_46MapCode_46GDLvl2BtnObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MapCode.GDLvl2BtnObjects2.length;i<l;++i) {
    if ( gdjs.MapCode.GDLvl2BtnObjects2[i].getVariableString(gdjs.MapCode.GDLvl2BtnObjects2[i].getVariables().get("status")) == "Unlocked" ) {
        gdjs.MapCode.condition1IsTrue_0.val = true;
        gdjs.MapCode.GDLvl2BtnObjects2[k] = gdjs.MapCode.GDLvl2BtnObjects2[i];
        ++k;
    }
}
gdjs.MapCode.GDLvl2BtnObjects2.length = k;}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lvl3Btn"), gdjs.MapCode.GDLvl3BtnObjects2);

gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MapCode.mapOfGDgdjs_46MapCode_46GDLvl3BtnObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MapCode.GDLvl3BtnObjects2.length;i<l;++i) {
    if ( gdjs.MapCode.GDLvl3BtnObjects2[i].getVariableString(gdjs.MapCode.GDLvl3BtnObjects2[i].getVariables().get("status")) == "Unlocked" ) {
        gdjs.MapCode.condition1IsTrue_0.val = true;
        gdjs.MapCode.GDLvl3BtnObjects2[k] = gdjs.MapCode.GDLvl3BtnObjects2[i];
        ++k;
    }
}
gdjs.MapCode.GDLvl3BtnObjects2.length = k;}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lvl4Btn"), gdjs.MapCode.GDLvl4BtnObjects2);

gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MapCode.mapOfGDgdjs_46MapCode_46GDLvl4BtnObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MapCode.GDLvl4BtnObjects2.length;i<l;++i) {
    if ( gdjs.MapCode.GDLvl4BtnObjects2[i].getVariableString(gdjs.MapCode.GDLvl4BtnObjects2[i].getVariables().get("status")) == "Unlocked" ) {
        gdjs.MapCode.condition1IsTrue_0.val = true;
        gdjs.MapCode.GDLvl4BtnObjects2[k] = gdjs.MapCode.GDLvl4BtnObjects2[i];
        ++k;
    }
}
gdjs.MapCode.GDLvl4BtnObjects2.length = k;}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level4", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lvl5Btn"), gdjs.MapCode.GDLvl5BtnObjects2);

gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MapCode.mapOfGDgdjs_46MapCode_46GDLvl5BtnObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MapCode.GDLvl5BtnObjects2.length;i<l;++i) {
    if ( gdjs.MapCode.GDLvl5BtnObjects2[i].getVariableString(gdjs.MapCode.GDLvl5BtnObjects2[i].getVariables().get("status")) == "Unlocked" ) {
        gdjs.MapCode.condition1IsTrue_0.val = true;
        gdjs.MapCode.GDLvl5BtnObjects2[k] = gdjs.MapCode.GDLvl5BtnObjects2[i];
        ++k;
    }
}
gdjs.MapCode.GDLvl5BtnObjects2.length = k;}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level5", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lvl6Btn"), gdjs.MapCode.GDLvl6BtnObjects2);

gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MapCode.mapOfGDgdjs_46MapCode_46GDLvl6BtnObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MapCode.GDLvl6BtnObjects2.length;i<l;++i) {
    if ( gdjs.MapCode.GDLvl6BtnObjects2[i].getVariableString(gdjs.MapCode.GDLvl6BtnObjects2[i].getVariables().get("status")) == "Unlocked" ) {
        gdjs.MapCode.condition1IsTrue_0.val = true;
        gdjs.MapCode.GDLvl6BtnObjects2[k] = gdjs.MapCode.GDLvl6BtnObjects2[i];
        ++k;
    }
}
gdjs.MapCode.GDLvl6BtnObjects2.length = k;}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level6", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lvl7Btn"), gdjs.MapCode.GDLvl7BtnObjects2);

gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MapCode.mapOfGDgdjs_46MapCode_46GDLvl7BtnObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MapCode.GDLvl7BtnObjects2.length;i<l;++i) {
    if ( gdjs.MapCode.GDLvl7BtnObjects2[i].getVariableString(gdjs.MapCode.GDLvl7BtnObjects2[i].getVariables().get("status")) == "Unlocked" ) {
        gdjs.MapCode.condition1IsTrue_0.val = true;
        gdjs.MapCode.GDLvl7BtnObjects2[k] = gdjs.MapCode.GDLvl7BtnObjects2[i];
        ++k;
    }
}
gdjs.MapCode.GDLvl7BtnObjects2.length = k;}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level7", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lvl8Btn"), gdjs.MapCode.GDLvl8BtnObjects1);

gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MapCode.mapOfGDgdjs_46MapCode_46GDLvl8BtnObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MapCode.GDLvl8BtnObjects1.length;i<l;++i) {
    if ( gdjs.MapCode.GDLvl8BtnObjects1[i].getVariableString(gdjs.MapCode.GDLvl8BtnObjects1[i].getVariables().get("status")) == "Unlocked" ) {
        gdjs.MapCode.condition1IsTrue_0.val = true;
        gdjs.MapCode.GDLvl8BtnObjects1[k] = gdjs.MapCode.GDLvl8BtnObjects1[i];
        ++k;
    }
}
gdjs.MapCode.GDLvl8BtnObjects1.length = k;}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level8", false);
}}

}


};gdjs.MapCode.eventsList5 = function(runtimeScene) {

{



}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MapCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MapCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.MapCode.mapOfGDgdjs_46MapCode_46GDClearMemoryButtonObjects1Objects = Hashtable.newFrom({"ClearMemoryButton": gdjs.MapCode.GDClearMemoryButtonObjects1});gdjs.MapCode.eventsList6 = function(runtimeScene) {

{


{
{gdjs.evtTools.storage.writeStringInJSONFile("LevelStatus", "Level1", "Unlocked");
}{gdjs.evtTools.storage.writeStringInJSONFile("LevelStatus", "Level2", "Locked");
}{gdjs.evtTools.storage.writeStringInJSONFile("LevelStatus", "Level3", "Locked");
}{gdjs.evtTools.storage.writeStringInJSONFile("LevelStatus", "Level4", "Locked");
}{gdjs.evtTools.storage.writeStringInJSONFile("LevelStatus", "Level5", "Locked");
}{gdjs.evtTools.storage.writeStringInJSONFile("LevelStatus", "Level6", "Locked");
}{gdjs.evtTools.storage.writeStringInJSONFile("LevelStatus", "Level7", "Locked");
}{gdjs.evtTools.storage.writeStringInJSONFile("LevelStatus", "Level8", "Locked");
}}

}


};gdjs.MapCode.eventsList7 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Lvl1Btn"), gdjs.MapCode.GDLvl1BtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lvl2Btn"), gdjs.MapCode.GDLvl2BtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lvl3Btn"), gdjs.MapCode.GDLvl3BtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lvl4Btn"), gdjs.MapCode.GDLvl4BtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lvl5Btn"), gdjs.MapCode.GDLvl5BtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lvl6Btn"), gdjs.MapCode.GDLvl6BtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lvl7Btn"), gdjs.MapCode.GDLvl7BtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lvl8Btn"), gdjs.MapCode.GDLvl8BtnObjects1);
{gdjs.evtTools.storage.readStringFromJSONFile("LevelStatus", "Level1", runtimeScene, runtimeScene.getVariables().getFromIndex(0).getChild("Level1"));
}{for(var i = 0, len = gdjs.MapCode.GDLvl1BtnObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDLvl1BtnObjects1[i].returnVariable(gdjs.MapCode.GDLvl1BtnObjects1[i].getVariables().get("status")).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("Level1")));
}
}{gdjs.evtTools.storage.readStringFromJSONFile("LevelStatus", "Level2", runtimeScene, runtimeScene.getVariables().getFromIndex(0).getChild("Level2"));
}{for(var i = 0, len = gdjs.MapCode.GDLvl2BtnObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDLvl2BtnObjects1[i].returnVariable(gdjs.MapCode.GDLvl2BtnObjects1[i].getVariables().get("status")).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("Level2")));
}
}{gdjs.evtTools.storage.readStringFromJSONFile("LevelStatus", "Level3", runtimeScene, runtimeScene.getVariables().getFromIndex(0).getChild("Level3"));
}{for(var i = 0, len = gdjs.MapCode.GDLvl3BtnObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDLvl3BtnObjects1[i].returnVariable(gdjs.MapCode.GDLvl3BtnObjects1[i].getVariables().get("status")).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("Level3")));
}
}{gdjs.evtTools.storage.readStringFromJSONFile("LevelStatus", "Level4", runtimeScene, runtimeScene.getVariables().getFromIndex(0).getChild("Level4"));
}{for(var i = 0, len = gdjs.MapCode.GDLvl4BtnObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDLvl4BtnObjects1[i].returnVariable(gdjs.MapCode.GDLvl4BtnObjects1[i].getVariables().get("status")).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("Level4")));
}
}{gdjs.evtTools.storage.readStringFromJSONFile("LevelStatus", "Level5", runtimeScene, runtimeScene.getVariables().getFromIndex(0).getChild("Level5"));
}{for(var i = 0, len = gdjs.MapCode.GDLvl5BtnObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDLvl5BtnObjects1[i].returnVariable(gdjs.MapCode.GDLvl5BtnObjects1[i].getVariables().get("status")).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("Level5")));
}
}{gdjs.evtTools.storage.readStringFromJSONFile("LevelStatus", "Level6", runtimeScene, runtimeScene.getVariables().getFromIndex(0).getChild("Level6"));
}{for(var i = 0, len = gdjs.MapCode.GDLvl6BtnObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDLvl6BtnObjects1[i].returnVariable(gdjs.MapCode.GDLvl6BtnObjects1[i].getVariables().get("status")).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("Level6")));
}
}{gdjs.evtTools.storage.readStringFromJSONFile("LevelStatus", "Level7", runtimeScene, runtimeScene.getVariables().getFromIndex(0).getChild("Level7"));
}{for(var i = 0, len = gdjs.MapCode.GDLvl7BtnObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDLvl7BtnObjects1[i].returnVariable(gdjs.MapCode.GDLvl7BtnObjects1[i].getVariables().get("status")).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("Level7")));
}
}{gdjs.evtTools.storage.readStringFromJSONFile("LevelStatus", "Level8", runtimeScene, runtimeScene.getVariables().getFromIndex(0).getChild("Level7"));
}{for(var i = 0, len = gdjs.MapCode.GDLvl8BtnObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDLvl8BtnObjects1[i].returnVariable(gdjs.MapCode.GDLvl8BtnObjects1[i].getVariables().get("status")).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("Level8")));
}
}}

}


};gdjs.MapCode.eventsList8 = function(runtimeScene) {

{



}


{



}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = !(gdjs.evtTools.storage.elementExistsInJSONFile("LevelStatus", "Level1"));
}if (gdjs.MapCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MapCode.eventsList6(runtimeScene);} //End of subevents
}

}


{



}


{



}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("LevelStatus", "Level1");
}if (gdjs.MapCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MapCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.MapCode.eventsList9 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("ClearMemoryButton"), gdjs.MapCode.GDClearMemoryButtonObjects1);

gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
gdjs.MapCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MapCode.mapOfGDgdjs_46MapCode_46GDClearMemoryButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
{gdjs.evtTools.storage.clearJSONFile("LevelStatus");
}
{ //Subevents
gdjs.MapCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.MapCode.eventsList10 = function(runtimeScene) {

{


gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MapCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "14_FXSound_Loop.mp3", true, 0, 1);
}}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MapCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "946709_Ready-to-Burgle.mp3", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.MapCode.GDBackButtonObjects1);

gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MapCode.mapOfGDgdjs_46MapCode_46GDBackButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.MapCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MapCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.MapCode.eventsList3(runtimeScene);
}


{


gdjs.MapCode.eventsList5(runtimeScene);
}


{


gdjs.MapCode.eventsList9(runtimeScene);
}


};

gdjs.MapCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MapCode.GDMenuBGObjects1.length = 0;
gdjs.MapCode.GDMenuBGObjects2.length = 0;
gdjs.MapCode.GDMenuBGObjects3.length = 0;
gdjs.MapCode.GDMapObjects1.length = 0;
gdjs.MapCode.GDMapObjects2.length = 0;
gdjs.MapCode.GDMapObjects3.length = 0;
gdjs.MapCode.GDMoonObjects1.length = 0;
gdjs.MapCode.GDMoonObjects2.length = 0;
gdjs.MapCode.GDMoonObjects3.length = 0;
gdjs.MapCode.GDClearMemoryButtonObjects1.length = 0;
gdjs.MapCode.GDClearMemoryButtonObjects2.length = 0;
gdjs.MapCode.GDClearMemoryButtonObjects3.length = 0;
gdjs.MapCode.GDBackButtonObjects1.length = 0;
gdjs.MapCode.GDBackButtonObjects2.length = 0;
gdjs.MapCode.GDBackButtonObjects3.length = 0;
gdjs.MapCode.GDResetMemorytxtObjects1.length = 0;
gdjs.MapCode.GDResetMemorytxtObjects2.length = 0;
gdjs.MapCode.GDResetMemorytxtObjects3.length = 0;
gdjs.MapCode.GDBackButtontxtObjects1.length = 0;
gdjs.MapCode.GDBackButtontxtObjects2.length = 0;
gdjs.MapCode.GDBackButtontxtObjects3.length = 0;
gdjs.MapCode.GDLvl8BtnObjects1.length = 0;
gdjs.MapCode.GDLvl8BtnObjects2.length = 0;
gdjs.MapCode.GDLvl8BtnObjects3.length = 0;
gdjs.MapCode.GDLvl7BtnObjects1.length = 0;
gdjs.MapCode.GDLvl7BtnObjects2.length = 0;
gdjs.MapCode.GDLvl7BtnObjects3.length = 0;
gdjs.MapCode.GDLvl6BtnObjects1.length = 0;
gdjs.MapCode.GDLvl6BtnObjects2.length = 0;
gdjs.MapCode.GDLvl6BtnObjects3.length = 0;
gdjs.MapCode.GDLvl5BtnObjects1.length = 0;
gdjs.MapCode.GDLvl5BtnObjects2.length = 0;
gdjs.MapCode.GDLvl5BtnObjects3.length = 0;
gdjs.MapCode.GDLvl4BtnObjects1.length = 0;
gdjs.MapCode.GDLvl4BtnObjects2.length = 0;
gdjs.MapCode.GDLvl4BtnObjects3.length = 0;
gdjs.MapCode.GDLvl3BtnObjects1.length = 0;
gdjs.MapCode.GDLvl3BtnObjects2.length = 0;
gdjs.MapCode.GDLvl3BtnObjects3.length = 0;
gdjs.MapCode.GDLvl2BtnObjects1.length = 0;
gdjs.MapCode.GDLvl2BtnObjects2.length = 0;
gdjs.MapCode.GDLvl2BtnObjects3.length = 0;
gdjs.MapCode.GDLvl1BtnObjects1.length = 0;
gdjs.MapCode.GDLvl1BtnObjects2.length = 0;
gdjs.MapCode.GDLvl1BtnObjects3.length = 0;
gdjs.MapCode.GDLevel8BtnTextObjects1.length = 0;
gdjs.MapCode.GDLevel8BtnTextObjects2.length = 0;
gdjs.MapCode.GDLevel8BtnTextObjects3.length = 0;
gdjs.MapCode.GDLevel7BtnTextObjects1.length = 0;
gdjs.MapCode.GDLevel7BtnTextObjects2.length = 0;
gdjs.MapCode.GDLevel7BtnTextObjects3.length = 0;
gdjs.MapCode.GDLevel6BtnTextObjects1.length = 0;
gdjs.MapCode.GDLevel6BtnTextObjects2.length = 0;
gdjs.MapCode.GDLevel6BtnTextObjects3.length = 0;
gdjs.MapCode.GDLevel5BtnTextObjects1.length = 0;
gdjs.MapCode.GDLevel5BtnTextObjects2.length = 0;
gdjs.MapCode.GDLevel5BtnTextObjects3.length = 0;
gdjs.MapCode.GDLevel4BtnTextObjects1.length = 0;
gdjs.MapCode.GDLevel4BtnTextObjects2.length = 0;
gdjs.MapCode.GDLevel4BtnTextObjects3.length = 0;
gdjs.MapCode.GDLevel3BtnTextObjects1.length = 0;
gdjs.MapCode.GDLevel3BtnTextObjects2.length = 0;
gdjs.MapCode.GDLevel3BtnTextObjects3.length = 0;
gdjs.MapCode.GDLevel2BtnTextObjects1.length = 0;
gdjs.MapCode.GDLevel2BtnTextObjects2.length = 0;
gdjs.MapCode.GDLevel2BtnTextObjects3.length = 0;
gdjs.MapCode.GDLevel1BtnTextObjects1.length = 0;
gdjs.MapCode.GDLevel1BtnTextObjects2.length = 0;
gdjs.MapCode.GDLevel1BtnTextObjects3.length = 0;

gdjs.MapCode.eventsList10(runtimeScene);
return;

}

gdjs['MapCode'] = gdjs.MapCode;
