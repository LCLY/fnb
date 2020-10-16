// Containing all utilities functions
// for reducers

// not sure about the object type
export const updateObject = (oldObject: object, updatedProperties: object) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

/* For Unit testing */
export const findByTestAttribute = (component: any, attribute: string) => {
  const wrapper = component.find(`[data-test='${attribute}']`);
  return wrapper;
};
