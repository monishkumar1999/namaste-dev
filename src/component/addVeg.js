
export const addVeg = (WrappedComponent) => {
  return (props) => (
    <div>
      <label>Veg</label>
      <WrappedComponent {...props} />
    </div>
  );
};
