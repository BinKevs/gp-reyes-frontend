import Navigation from "./navigation";
const Layout_Container = (props) => {
  return (
    <div>
      <Navigation />
      {props.children}
    </div>
  );
};

export default Layout_Container;
