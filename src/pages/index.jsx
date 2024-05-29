import { styled } from "../../styles";

const Button = styled("button", {
  backgroundColor: "$rocketseat",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: 6,

  "&:hover": {
    filter: "brightness(0.9)"
  }
})

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Button>Click me</Button>
    </>
  );
}
