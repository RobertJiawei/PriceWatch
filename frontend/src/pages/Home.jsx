import { Button, TextInput } from "flowbite-react";

const Home = () => {
  return (
    <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-72">
      <h1 className="uppercase text-3xl my-3 font-semibold text-center mt-8">
        Search a Product
      </h1>
      <form className="flex flex-row mt-6 justify-center gap-4 items-center">
        <div className="">
          <TextInput
            type="text"
            placeholder="Search a product"
            required
            id="search"
            className="flex-1"
          />
        </div>
        <div className="p-2">
          <Button className=" rounded-md p-2">Search</Button>
        </div>
      </form>
    </main>
  );
};
export default Home;
