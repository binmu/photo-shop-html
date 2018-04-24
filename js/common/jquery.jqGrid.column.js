/**
 * Created by 33925
 */

function JqGridColumnDfs() {
    var colNames = new Array();
    var colModel = new Array();

    this.push = function(col) {
        colNames.push(col.title);
        //设置optext
        col.editoptions = $.extend({},col.editoptions,col.editoptionsExt);
        colModel.push(col);
    }
    this._cols = function() {
        var gridCnf = new Object();
        gridCnf["colNames"] = colNames;
        gridCnf["colModel"] = colModel;
        return gridCnf;
    }
}

function JqGridColumn() {
	this.edittype= 'custom';
	this.editoptions = $.jgrid.editer.text;
	this.editoptionsExt = {dataType:"string"};
	this.width = 80;
	this.sortable = false;
    var $this = this;
    this._data = function(_name) {
        this.name = _name;
        this.index = _name;
        return this;
    }

    this._title = function(_title) {
        this.title = _title;
        return this;
    }

    this._width = function(_width) {
        this.width = _width;
        return this;
    }

    this._align = function(_align) {
        this.align = _align;
        return this;
    }

    this._resize = function(_resize) {
        this.resize = _resize;
        return this;
    }

    this._fixed = function(_fixed) {
        this.fixed = _fixed;
        return this;
    }

    this._frozen = function(_frozen) {
        this.frozen = _frozen;
        return this;
    }



    this._hidden = function() {
        this.hidden = true;
        return this;
    }
    
    
    this._editable = function(editable) {
    	this.editable = editable;
    	if(editable==true){
    		this.classes="edit_col";
    	}
    	return this;
    }

    this._formatter = function(_formatter) {
        this.formatter = _formatter;
        return this;
    }
    
    this._unformat = function(_unformat) {
        this.unformat = _unformat;
        return this;
    }

    //设置编辑类， 默认为Text,包含类型，datePicker,select,
    this._editType = function(_editType){
    	if(_editType=="datePicker"){
    		this.editoptions = $.jgrid.editer.pickDate;
    	}else if(_editType=="popSelect") {
    		this.editoptions = $.jgrid.editer.popSelect;
    	}else if(_editType=="select") {
    		this.editoptions = $.jgrid.editer.select;
    		this.formatter =  $.jgrid.format.select;
    		this.unformat =  $.jgrid.unformat.select;
    	}
    	return this;
    }
    
    //设计数据类型
    //_dataType 包含："number","string"
    //_valid ： 类型为number时{maxVal:最大值} ，为string 时 {maxLen:最大长度}
    this._dataType = function(_dataType,_valid){
    	this.editoptionsExt = {dataType:_dataType,valid:_valid};
    	return this;
    }
    
    this._cellEditAbleSet = function(_cellEditAbleSet){
    	this.cellEditAbleSet= _cellEditAbleSet;
    	return this;
    }
}