/**
 * Link tests:
 * 
 * {@link SOME_CONST}
 * 
 * > I can't get any of these link formats to work to disambiguate the reference above:
 * 
 * {@link module1.SOME_CONST}
 * 
 * {@link "module1".SOME_CONST} <-- Not valid, module name does not contain quotes.
 * 
 * {@link module2.SOME_CONST}
 * 
 * {@link "module2".SOME_CONST} <-- Not valid, module name does not contain quotes
 * 
 * > I can't figure out any way to link a class which is a default export:
 * 
 * {@link SomeClass} <-- I think you meant OtherClass
 * 
 * {@link module1.default}
 * 
 * {@link module1.SomeClass} <-- I think you meant OtherClass
 * 
 * {@link OtherClass}
 * 
 * {@link module1.OtherClass}
 *
 * > Named exports work, but I can't figure out how to reference them as the default:
 *  
 * {@link SomeClass2}
 * 
 * {@link module2.SomeClass2}
 * 
 * {@link module2.default}
 * 
 * @packageDocumentation
 */

/**
 * @param param1 Some param 1
 * @param [param2] Optional param 2
 */
export function doThing(
  param1: string,
  param2: number
) {
  return `${param1}+${param2}`;
}

/**
 * @param param1 Some param 1
 * @param [param2] Optional param 2
 */
// export function doThing2(
//   param1: string,
//   param2?: number
// ) {
//   return `${param1}+${param2}`;
// }

/**
 * @param param1 Some param 1
 * @param param2 Optional param 2
 */
// export function doThing3(
//   param1: string,
//   param2?: number
// ) {
//   return `${param1}+${param2}`;
// }
