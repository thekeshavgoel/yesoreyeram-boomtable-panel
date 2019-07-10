System.register(["./index"], function (exports_1, context_1) {
    "use strict";
    var index_1, BoomPattern;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            BoomPattern = (function () {
                function BoomPattern(options) {
                    this.row_col_wrapper = "_";
                    if (options && options.row_col_wrapper) {
                        this.row_col_wrapper = options.row_col_wrapper;
                    }
                    this.bgColors = options && options.bgColors ? options.bgColors : "green|orange|red";
                    this.bgColors_overrides = options && options.bgColors_overrides ? options.bgColors_overrides : "0->green|2->red|1->yellow";
                    this.textColors = options && options.textColors ? options.textColors : "red|orange|green";
                    this.textColors_overrides = options && options.textColors_overrides ? options.textColors_overrides : "0->red|2->green|1->yellow";
                    this.clickable_cells_link = options && options.clickable_cells_link ? options.clickable_cells_link : "";
                    this.col_name = options && options.col_name ? options.col_name : this.row_col_wrapper + "1" + this.row_col_wrapper;
                    this.decimals = options && options.decimals ? options.decimals : 2;
                    this.delimiter = options && options.delimiter ? options.delimiter : ".";
                    this.enable_bgColor = false;
                    this.enable_bgColor_overrides = false;
                    this.enable_textColor = false;
                    this.enable_textColor_overrides = false;
                    this.enable_clickable_cells = false;
                    this.enable_time_based_thresholds = false;
                    this.enable_transform = false;
                    this.enable_transform_overrides = false;
                    this.filter = {
                        value_above: "",
                        value_below: "",
                    };
                    this.format = options && options.format ? options.format : "none";
                    this.name = options && options.name ? options.name : "New Pattern";
                    this.null_color = options && options.null_color ? options.null_color : "darkred";
                    this.null_textcolor = options && options.null_Textcolor ? options.null_Textcolor : "black";
                    this.null_value = options && options.null_value ? options.null_value : "No data";
                    this.pattern = options && options.pattern ? options.pattern : "^server.*cpu$";
                    this.row_name = options && options.row_name ? options.row_name : this.row_col_wrapper + "0" + this.row_col_wrapper;
                    this.thresholds = options && options.thresholds ? options.thresholds : "70,90";
                    this.time_based_thresholds = [];
                    this.transform_values = options && options.transform_values ? options.transform_values : "_value_|_value_|_value_";
                    this.transform_values_overrides = options && options.transform_values_overrides ? options.transform_values_overrides : "0->down|1->up";
                    this.tooltipTemplate = options && options.tooltipTemplate ? options.tooltipTemplate : "Series : _series_ <br/>Row Name : _row_name_ <br/>Col Name : _col_name_ <br/>Value : _value_";
                    this.valueName = options && options.valueName ? options.valueName : "avg";
                }
                return BoomPattern;
            }());
            exports_1("BoomPattern", BoomPattern);
            BoomPattern.prototype.inverseBGColors = function () {
                this.bgColors = this.bgColors ? this.bgColors.split("|").reverse().join("|") : "";
            };
            BoomPattern.prototype.inverseTextColors = function () {
                this.textColors = this.textColors ? this.textColors.split("|").reverse().join("|") : "";
            };
            BoomPattern.prototype.inverseTransformValues = function () {
                this.transform_values = this.transform_values ? this.transform_values.split("|").reverse().join("|") : "";
            };
            BoomPattern.prototype.add_time_based_thresholds = function () {
                var new_time_based_threshold = new index_1.BoomTimeBasedThreshold();
                this.time_based_thresholds = this.time_based_thresholds || [];
                this.time_based_thresholds.push(new_time_based_threshold);
            };
            BoomPattern.prototype.remove_time_based_thresholds = function (index) {
                if (this.time_based_thresholds.length > 0) {
                    this.time_based_thresholds.splice(Number(index), 1);
                }
            };
            BoomPattern.prototype.setUnitFormat = function (format) {
                this.format = format && format.value ? format.value : "none";
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9vbVBhdHRlcm4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2Jvb20vQm9vbVBhdHRlcm4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7WUFFQTtnQkF5Q0kscUJBQVksT0FBWTtvQkF4Q2hCLG9CQUFlLEdBQUcsR0FBRyxDQUFDO29CQXlDMUIsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLGVBQWUsRUFBRTt3QkFDcEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDO3FCQUNsRDtvQkFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDcEYsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE9BQU8sSUFBSSxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsMkJBQTJCLENBQUM7b0JBQzNILElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDO29CQUMxRixJQUFJLENBQUMsb0JBQW9CLEdBQUcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQywyQkFBMkIsQ0FBQztvQkFDakksSUFBSSxDQUFDLG9CQUFvQixHQUFHLE9BQU8sSUFBSSxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUN4RyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sSUFBSSxPQUFPLENBQUMsUUFBUSxD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TyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDOUcsQ0FBQyxDQUFDO1lBRUYsV0FBVyxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsR0FBRztnQkFDOUMsSUFBSSx3QkFBd0IsR0FBNEIsSUFBSSw4QkFBc0IsRUFBRSxDQUFDO2dCQUNyRixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixJQUFJLEVBQUUsQ0FBQztnQkFDOUQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQzlELENBQUMsQ0FBQztZQUVGLFdBQVcsQ0FBQyxTQUFTLENBQUMsNEJBQTRCLEdBQUcsVUFBVSxLQUFhO2dCQUN4RSxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUN2QyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDdkQ7WUFDTCxDQUFDLENBQUM7WUFFRixXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxVQUFVLE1BQVc7Z0JBQ3ZELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNqRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQm9vbVBhdHRlcm4sIElCb29tVGltZUJhc2VkVGhyZXNob2xkLCBCb29tVGltZUJhc2VkVGhyZXNob2xkIH0gZnJvbSBcIi4vaW5kZXhcIjtcblxuY2xhc3MgQm9vbVBhdHRlcm4gaW1wbGVtZW50cyBJQm9vbVBhdHRlcm4ge1xuICAgIHByaXZhdGUgcm93X2NvbF93cmFwcGVyID0gXCJfXCI7XG4gICAgcHVibGljIGJnQ29sb3JzOiBzdHJpbmc7XG4gICAgcHVibGljIGJnQ29sb3JzX292ZXJyaWRlczogc3RyaW5nO1xuICAgIHB1YmxpYyBjbGlja2FibGVfY2VsbHNfbGluazogc3RyaW5nO1xuICAgIHB1YmxpYyBjb2xfbmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyBkZWNpbWFsczogTnVtYmVyO1xuICAgIHB1YmxpYyBkZWxpbWl0ZXI6IHN0cmluZztcbiAgICBwdWJsaWMgZW5hYmxlX2JnQ29sb3I6IEJvb2xlYW47XG4gICAgcHVibGljIGVuYWJsZV9iZ0NvbG9yX292ZXJyaWRlczogQm9vbGVhbjtcbiAgICBwdWJsaWMgZW5hYmxlX2NsaWNrYWJsZV9jZWxsczogQm9vbGVhbjtcbiAgICBwdWJsaWMgZW5hYmxlX3RleHRDb2xvcjogQm9vbGVhbjtcbiAgICBwdWJsaWMgZW5hYmxlX3RleHRDb2xvcl9vdmVycmlkZXM6IEJvb2xlYW47XG4gICAgcHVibGljIGVuYWJsZV90aW1lX2Jhc2VkX3RocmVzaG9sZHM6IEJvb2xlYW47XG4gICAgcHVibGljIGVuYWJsZV90cmFuc2Zvcm06IEJvb2xlYW47XG4gICAgcHVibGljIGVuYWJsZV90cmFuc2Zvcm1fb3ZlcnJpZGVzOiBCb29sZWFuO1xuICAgIHB1YmxpYyBmaWx0ZXI6IHtcbiAgICAgICAgdmFsdWVfYWJvdmU6IHN0cmluZztcbiAgICAgICAgdmFsdWVfYmVsb3c6IHN0cmluZztcbiAgICB9O1xuICAgIHB1YmxpYyBmb3JtYXQ6IHN0cmluZztcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyBudWxsX2NvbG9yOiBzdHJpbmc7XG4gICAgcHVibGljIG51bGxfdmFsdWU6IHN0cmluZztcbiAgICBwdWJsaWMgbnVsbF90ZXh0Y29sb3I6IHN0cmluZztcbiAgICBwdWJsaWMgcGF0dGVybjogc3RyaW5nO1xuICAgIHB1YmxpYyByb3dfbmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyB0ZXh0Q29sb3JzOiBzdHJpbmc7XG4gICAgcHVibGljIHRleHRDb2xvcnNfb3ZlcnJpZGVzOiBzdHJpbmc7XG4gICAgcHVibGljIHRocmVzaG9sZHM6IHN0cmluZztcbiAgICBwdWJsaWMgdGltZV9iYXNlZF90aHJlc2hvbGRzOiBJQm9vbVRpbWVCYXNlZFRocmVzaG9sZFtdO1xuICAgIHB1YmxpYyB0cmFuc2Zvcm1fdmFsdWVzOiBzdHJpbmc7XG4gICAgcHVibGljIHRyYW5zZm9ybV92YWx1ZXNfb3ZlcnJpZGVzOiBzdHJpbmc7XG4gICAgcHVibGljIHRvb2x0aXBUZW1wbGF0ZTogc3RyaW5nO1xuICAgIHB1YmxpYyB2YWx1ZU5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgaW52ZXJzZUJHQ29sb3JzO1xuICAgIHB1YmxpYyBpbnZlcnNlVGV4dENvbG9ycztcbiAgICBwdWJsaWMgaW52ZXJzZVRyYW5zZm9ybVZhbHVlcztcbiAgICBwdWJsaWMgYWRkX3RpbWVfYmFzZWRfdGhyZXNob2xkcztcbiAgICBwdWJsaWMgcmVtb3ZlX3RpbWVfYmFzZWRfdGhyZXNob2xkcztcbiAgICBwdWJsaWMgc2V0VW5pdEZvcm1hdDtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBhbnkpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5yb3dfY29sX3dyYXBwZXIpIHtcbiAgICAgICAgICAgIHRoaXMucm93X2NvbF93cmFwcGVyID0gb3B0aW9ucy5yb3dfY29sX3dyYXBwZXI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iZ0NvbG9ycyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5iZ0NvbG9ycyA/IG9wdGlvbnMuYmdDb2xvcnMgOiBcImdyZWVufG9yYW5nZXxyZWRcIjtcbiAgICAgICAgdGhpcy5iZ0NvbG9yc19vdmVycmlkZXMgPSBvcHRpb25zICYmIG9wdGlvbnMuYmdDb2xvcnNfb3ZlcnJpZGVzID8gb3B0aW9ucy5iZ0NvbG9yc19vdmVycmlkZXMgOiBcIjAtPmdyZWVufDItPnJlZHwxLT55ZWxsb3dcIjtcbiAgICAgICAgdGhpcy50ZXh0Q29sb3JzID0gb3B0aW9ucyAmJiBvcHRpb25zLnRleHRDb2xvcnMgPyBvcHRpb25zLnRleHRDb2xvcnMgOiBcInJlZHxvcmFuZ2V8Z3JlZW5cIjtcbiAgICAgICAgdGhpcy50ZXh0Q29sb3JzX292ZXJyaWRlcyA9IG9wdGlvbnMgJiYgb3B0aW9ucy50ZXh0Q29sb3JzX292ZXJyaWRlcyA/IG9wdGlvbnMudGV4dENvbG9yc19vdmVycmlkZXMgOiBcIjAtPnJlZHwyLT5ncmVlbnwxLT55ZWxsb3dcIjtcbiAgICAgICAgdGhpcy5jbGlja2FibGVfY2VsbHNfbGluayA9IG9wdGlvbnMgJiYgb3B0aW9ucy5jbGlja2FibGVfY2VsbHNfbGluayA/IG9wdGlvbnMuY2xpY2thYmxlX2NlbGxzX2xpbmsgOiBcIlwiO1xuICAgICAgICB0aGlzLmNvbF9uYW1lID0gb3B0aW9ucyAmJiBvcHRpb25zLmNvbF9uYW1lID8gb3B0aW9ucy5jb2xfbmFtZSA6IHRoaXMucm93X2NvbF93cmFwcGVyICsgXCIxXCIgKyB0aGlzLnJvd19jb2xfd3JhcHBlcjtcbiAgICAgICAgdGhpcy5kZWNpbWFscyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5kZWNpbWFscyA/IG9wdGlvbnMuZGVjaW1hbHMgOiAyO1xuICAgICAgICB0aGlzLmRlbGltaXRlciA9IG9wdGlvbnMgJiYgb3B0aW9ucy5kZWxpbWl0ZXIgPyBvcHRpb25zLmRlbGltaXRlciA6IFwiLlwiO1xuICAgICAgICB0aGlzLmVuYWJsZV9iZ0NvbG9yID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW5hYmxlX2JnQ29sb3Jfb3ZlcnJpZGVzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW5hYmxlX3RleHRDb2xvciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVuYWJsZV90ZXh0Q29sb3Jfb3ZlcnJpZGVzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW5hYmxlX2NsaWNrYWJsZV9jZWxscyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVuYWJsZV90aW1lX2Jhc2VkX3RocmVzaG9sZHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbmFibGVfdHJhbnNmb3JtID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW5hYmxlX3RyYW5zZm9ybV9vdmVycmlkZXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSB7XG4gICAgICAgICAgICB2YWx1ZV9hYm92ZTogXCJcIixcbiAgICAgICAgICAgIHZhbHVlX2JlbG93OiBcIlwiLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmZvcm1hdCA9IG9wdGlvbnMgJiYgb3B0aW9ucy5mb3JtYXQgPyBvcHRpb25zLmZvcm1hdCA6IFwibm9uZVwiO1xuICAgICAgICB0aGlzLm5hbWUgPSBvcHRpb25zICYmIG9wdGlvbnMubmFtZSA/IG9wdGlvbnMubmFtZSA6IFwiTmV3IFBhdHRlcm5cIjtcbiAgICAgICAgdGhpcy5udWxsX2NvbG9yID0gb3B0aW9ucyAmJiBvcHRpb25zLm51bGxfY29sb3IgPyBvcHRpb25zLm51bGxfY29sb3IgOiBcImRhcmtyZWRcIjtcbiAgICAgICAgdGhpcy5udWxsX3RleHRjb2xvciA9IG9wdGlvbnMgJiYgb3B0aW9ucy5udWxsX1RleHRjb2xvciA/IG9wdGlvbnMubnVsbF9UZXh0Y29sb3IgOiBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMubnVsbF92YWx1ZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5udWxsX3ZhbHVlID8gb3B0aW9ucy5udWxsX3ZhbHVlIDogXCJObyBkYXRhXCI7XG4gICAgICAgIHRoaXMucGF0dGVybiA9IG9wdGlvbnMgJiYgb3B0aW9ucy5wYXR0ZXJuID8gb3B0aW9ucy5wYXR0ZXJuIDogXCJec2VydmVyLipjcHUkXCI7XG4gICAgICAgIHRoaXMucm93X25hbWUgPSBvcHRpb25zICYmIG9wdGlvbnMucm93X25hbWUgPyBvcHRpb25zLnJvd19uYW1lIDogdGhpcy5yb3dfY29sX3dyYXBwZXIgKyBcIjBcIiArIHRoaXMucm93X2NvbF93cmFwcGVyO1xuICAgICAgICB0aGlzLnRocmVzaG9sZHMgPSBvcHRpb25zICYmIG9wdGlvbnMudGhyZXNob2xkcyA/IG9wdGlvbnMudGhyZXNob2xkcyA6IFwiNzAsOTBcIjtcbiAgICAgICAgdGhpcy50aW1lX2Jhc2VkX3RocmVzaG9sZHMgPSBbXTtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1fdmFsdWVzID0gb3B0aW9ucyAmJiBvcHRpb25zLnRyYW5zZm9ybV92YWx1ZXMgPyBvcHRpb25zLnRyYW5zZm9ybV92YWx1ZXMgOiBcIl92YWx1ZV98X3ZhbHVlX3xfdmFsdWVfXCI7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtX3ZhbHVlc19vdmVycmlkZXMgPSBvcHRpb25zICYmIG9wdGlvbnMudHJhbnNmb3JtX3ZhbHVlc19vdmVycmlkZXMgPyBvcHRpb25zLnRyYW5zZm9ybV92YWx1ZXNfb3ZlcnJpZGVzIDogXCIwLT5kb3dufDEtPnVwXCI7XG4gICAgICAgIHRoaXMudG9vbHRpcFRlbXBsYXRlID0gb3B0aW9ucyAmJiBvcHRpb25zLnRvb2x0aXBUZW1wbGF0ZSA/IG9wdGlvbnMudG9vbHRpcFRlbXBsYXRlIDogXCJTZXJpZXMgOiBfc2VyaWVzXyA8YnIvPlJvdyBOYW1lIDogX3Jvd19uYW1lXyA8YnIvPkNvbCBOYW1lIDogX2NvbF9uYW1lXyA8YnIvPlZhbHVlIDogX3ZhbHVlX1wiO1xuICAgICAgICB0aGlzLnZhbHVlTmFtZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy52YWx1ZU5hbWUgPyBvcHRpb25zLnZhbHVlTmFtZSA6IFwiYXZnXCI7XG4gICAgfVxufVxuXG5Cb29tUGF0dGVybi5wcm90b3R5cGUuaW52ZXJzZUJHQ29sb3JzID0gZnVuY3Rpb24gKCk6IHZvaWQge1xuICAgIHRoaXMuYmdDb2xvcnMgPSB0aGlzLmJnQ29sb3JzID8gdGhpcy5iZ0NvbG9ycy5zcGxpdChcInxcIikucmV2ZXJzZSgpLmpvaW4oXCJ8XCIpIDogXCJcIjtcbn07XG5cbkJvb21QYXR0ZXJuLnByb3RvdHlwZS5pbnZlcnNlVGV4dENvbG9ycyA9IGZ1bmN0aW9uICgpOiB2b2lkIHtcbiAgICB0aGlzLnRleHRDb2xvcnMgPSB0aGlzLnRleHRDb2xvcnMgPyB0aGlzLnRleHRDb2xvcnMuc3BsaXQoXCJ8XCIpLnJldmVyc2UoKS5qb2luKFwifFwiKSA6IFwiXCI7XG59O1xuXG5Cb29tUGF0dGVybi5wcm90b3R5cGUuaW52ZXJzZVRyYW5zZm9ybVZhbHVlcyA9IGZ1bmN0aW9uICgpOiB2b2lkIHtcbiAgICB0aGlzLnRyYW5zZm9ybV92YWx1ZXMgPSB0aGlzLnRyYW5zZm9ybV92YWx1ZXMgPyB0aGlzLnRyYW5zZm9ybV92YWx1ZXMuc3BsaXQoXCJ8XCIpLnJldmVyc2UoKS5qb2luKFwifFwiKSA6IFwiXCI7XG59O1xuXG5Cb29tUGF0dGVybi5wcm90b3R5cGUuYWRkX3RpbWVfYmFzZWRfdGhyZXNob2xkcyA9IGZ1bmN0aW9uICgpOiB2b2lkIHtcbiAgICBsZXQgbmV3X3RpbWVfYmFzZWRfdGhyZXNob2xkOiBJQm9vbVRpbWVCYXNlZFRocmVzaG9sZCA9IG5ldyBCb29tVGltZUJhc2VkVGhyZXNob2xkKCk7XG4gICAgdGhpcy50aW1lX2Jhc2VkX3RocmVzaG9sZHMgPSB0aGlzLnRpbWVfYmFzZWRfdGhyZXNob2xkcyB8fCBbXTtcbiAgICB0aGlzLnRpbWVfYmFzZWRfdGhyZXNob2xkcy5wdXNoKG5ld190aW1lX2Jhc2VkX3RocmVzaG9sZCk7XG59O1xuXG5Cb29tUGF0dGVybi5wcm90b3R5cGUucmVtb3ZlX3RpbWVfYmFzZWRfdGhyZXNob2xkcyA9IGZ1bmN0aW9uIChpbmRleDogTnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGltZV9iYXNlZF90aHJlc2hvbGRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy50aW1lX2Jhc2VkX3RocmVzaG9sZHMuc3BsaWNlKE51bWJlcihpbmRleCksIDEpO1xuICAgIH1cbn07XG5cbkJvb21QYXR0ZXJuLnByb3RvdHlwZS5zZXRVbml0Rm9ybWF0ID0gZnVuY3Rpb24gKGZvcm1hdDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5mb3JtYXQgPSBmb3JtYXQgJiYgZm9ybWF0LnZhbHVlID8gZm9ybWF0LnZhbHVlIDogXCJub25lXCI7XG59O1xuXG5leHBvcnQge1xuICAgIEJvb21QYXR0ZXJuXG59O1xuIl19