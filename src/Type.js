/**
 * Copyright 2012 Martin Gallagher
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
(function ($, undefined) {
	'use strict';

	/**
	 * Style.js major version
	 * @private
	 * @constant
	 * @type {Number}
	 */
	var VERSION_MAJOR = 1;

	/**
	 * Style.js minor version
	 * @private
	 * @constant
	 * @type {Number}
	 */
	var VERSION_MINOR = 0;

	/**
	 * Style.js patch version
	 * @private
	 * @constant
	 * @type {Number}
	 */
	var VERSION_PATCH = 0;

	// Local copy
	var Type = function () {};

	// Globalisation
	$.Type = Type;

	/**
	 * Returns version of library
	 * @static
	 * @returns {String}
	 */
	Type.getVersion = function () {
		return VERSION_MAJOR + '.' + VERSION_MINOR + '.' + VERSION_PATCH;
	};

	/**
	 * Checks if value is string type
	 * @static
	 * @param {mixed} value
	 * @returns {Boolean}
	 */
	Type.isString = function (value) {
		return typeof value === 'string';
	};

	/**
	 * Checks if value is number type
	 * @static
	 * @param {mixed} value
	 * @param {Boolean} disableTypesafe If true do numerical comparison using "=="
	 * @returns {Boolean}
	 */
	Type.isNumber = function (value, disableTypesafe) {
		return typeof value === 'number' || (disableTypesafe === true && !isNaN(value));
	};

	/**
	 * Checks if value is float type
	 * @static
	 * @param {mixed} value
	 * @param {Boolean} disableTypesafe If true do numerical comparison using "=="
	 * @returns {Boolean}
	 */
	Type.isFloat = function (value, disableTypesafe) {
		return Type.isNumber(value, disableTypesafe) && value % 1 !== 0;
	};

	/**
	 * Checks if value is integer type
	 * @static
	 * @param {mixed} value
	 * @param {Boolean} disableTypesafe If true do numerical comparison using "=="
	 * @returns {Boolean}
	 */
	Type.isInteger = function (value, disableTypesafe) {
		return Type.isNumber(value, disableTypesafe) && value % 1 === 0;
	};

	/**
	 * Checks if value is scalar value
	 * @static
	 * @param {mixed} value
	 * @returns {Boolean}
	 */
	Type.isScalar = function (value) {
		return Type.isString(value) || Type.isNumber(value);
	};

	/**
	 * Checks if value is array type
	 * @static
	 * @param {mixed} value
	 * @returns {Boolean}
	 */
	Type.isArray = function (value) {
		return value instanceof Array;
	};

	/**
	 * Checks if value is function type
	 * @static
	 * @param {mixed} value
	 * @returns {Boolean}
	 */
	Type.isFunction = function (value) {
		return typeof value === 'function';
	};

	/**
	 * Checks if value is object type
	 * @static
	 * @param {mixed} value
	 * @returns {Boolean}
	 */
	Type.isObject = function (value) {
		return value instanceof Object && !Type.isArray(value) && !Type.isFunction(value);
	};

	/**
	 * Checks if value is Image type
	 * @static
	 * @param {mixed} value
	 * @returns {Boolean}
	 */
	Type.isImage = function (value) {
		return value instanceof Image;
	};

	/**
	 * Checks if value is HTMLElement type
	 * @static
	 * @param {mixed} value
	 * @returns {Boolean}
	 */
	Type.isElement = function (value) {
		return value instanceof HTMLElement;
	};

	/**
	 * Gets the type of a given value
	 * @private
	 * @param {mixed} value
	 * @param {Boolean} disableTypesafe Compare numbers with == if true
	 * @returns {String} Object type
	 */
	Type.getType = function (value, disableTypesafe) {
		if (value !== undefined && value !== null) {
			if (Type.isNumber(value, disableTypesafe)) {
				return 'number';
			} else if (Type.isString(value)) {
				return 'string';
			} else if (Type.isArray(value)) {
				return 'array';
			} else if (Type.isFunction(value)) {
				return 'function';
			} else if (typeof value === 'object') {
				return value.getType() || 'object';
			}
		}
	};

	/**
	 * Check if string is a hexidecimal value
	 * @returns {Boolean}
	 */
	String.prototype.isHex = function () {
		return (/^([0-9a-f]+)$/i).test(this);
	};
})(this);