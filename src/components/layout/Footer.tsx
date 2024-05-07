import Categories from "../ui/Categories";
import Logo from "../ui/Logo";
import Subscription from "../ui/Subscription";

const Footer = () => {
  return (
    // <Box
    //   style={{
    //     backgroundColor: "#0a0a0c",
    //     padding: "2rem",
    //   }}
    // >
    //   <Flex justify="between" align="center">
    //     <Button
    //       style={{
    //         padding: "20px",
    //       }}
    //     >
    //       <Link href="/legal" style={{ color: "white", fontSize: "20px" }}>
    //         Legal
    //       </Link>
    //     </Button>
    //     <Button
    //       style={{
    //         padding: "20px",
    //       }}
    //     >
    //       <Link href="/cancel" style={{ color: "white", fontSize: "20px" }}>
    //         Unsubscribe
    //       </Link>
    //     </Button>
    //     <Button
    //       style={{
    //         padding: "20px",
    //       }}
    //     >
    //       <Link href="/login" style={{ color: "white", fontSize: "20px" }}>
    //         Login
    //       </Link>
    //     </Button>
    //     <Button
    //       style={{
    //         padding: "20px",
    //       }}
    //     >
    //       <Link href="/register" style={{ color: "white", fontSize: "20px" }}>
    //         Register
    //       </Link>
    //     </Button>
    //   </Flex>
    // </Box>
    <footer className="flex items-center justify-center border-t-[1px] border-purple p-[24px] md:p-[48px]">
      <h2 className="sr-only">Footer</h2>
      <div className="flex w-full max-w-full flex-col items-start justify-between md:w-[1440px] md:flex-row">
        <Categories />
        {/* <div className="my-8 flex flex-col items-center justify-center gap-8 md:my-0"> */}
        <Logo />
        {/* </div> */}
        <Subscription />
      </div>
    </footer>
  );
};

export default Footer;
