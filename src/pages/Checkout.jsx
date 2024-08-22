import { useForm } from "react-hook-form";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });


  const formSubmit = (data) => console.log(data)



  return (
    <div className="w-[95%] py-10 mx-auto">
      <div className="w-full flex flex-col">
        <div>
          <h2 className="text-sky-950 text-2xl font-bold uppercase tracking-wider">
            checkout
          </h2>
          <p className={`mt-1 text-base text-orange-500`}>
            complete your information
          </p>
        </div>
        <form
          className="flex flex-col gap-6 w-full my-8"
          onSubmit={handleSubmit(formSubmit)}
        >
          <div className="flex max-lg:flex-col max-lg:gap-6 gap-2">
            <div
              className={`w-full h-14 relative bg-white rounded-tl-md rounded-tr-md`}
            >
              <label
                className={`absolute left-2 top-2 z-10 text-sm text-zinc-600"
                }`}
              >
                First Name
              </label>
              <input
                className={`size-full bg-transparent outline-none relative text-zinc-800
                } pl-2 pt-5 border-b border-gray-300 ${
                  errors.firstName
                    ? "border-red-600"
                    : "hover:border-slate-200 focus:border-blue-400"
                }`}
                type="text"
                {...register("firstName", {
                  required: "This field is required",
                  minLength: {
                    value: 3,
                    message: "First name must be at least 3 characters",
                  },
                })}
              />
              <p className="mt-1 text-red-600 text-sm">
                {errors.firstName?.message}
              </p>
            </div>
            <div
              className={`w-full h-14 relative bg-white rounded-tl-md rounded-tr-md`}
            >
              <label
                className={`absolute left-2 top-2 z-10 text-sm text-zinc-600`}
              >
                Last Name
              </label>
              <input
                className={`size-full bg-transparent outline-none relative text-zinc-800
                } pl-2 pt-5 border-b border-gray-300 ${
                  errors.lastName
                    ? "border-red-600"
                    : "hover:border-slate-200 focus:border-blue-400"
                }`}
                type="text"
                {...register("lastName", {
                  required: "This field is required",
                  minLength: {
                    value: 3,
                    message: "Last name must be at least 3 characters",
                  },
                })}
              />
              <p className="mt-1 text-red-600 text-sm">
                {errors.lastName?.message}
              </p>
            </div>
          </div>
          <div
            className={`w-full h-14 relative bg-white rounded-tl-md rounded-tr-md`}
          >
            <label
              className={`absolute left-2 top-2 z-10 text-sm text-zinc-600`}
            >
              Email
            </label>
            <input
              className={`size-full bg-transparent outline-none relative text-zinc-800
              } pl-2 pt-5 border-b border-gray-300 ${
                errors.email
                  ? "border-red-600"
                  : "hover:border-slate-200 focus:border-blue-400"
              }`}
              type="email"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
            <p className="mt-1 text-red-600 text-sm">{errors.email?.message}</p>
          </div>
          <div
            className={`w-full h-14 relative bg-white rounded-tl-md rounded-tr-md`}
          >
            <label
              className={`absolute left-2 top-2 z-10 text-sm text-zinc-600`}
            >
              Phone Number
            </label>
            <input
              className={`size-full bg-transparent outline-none relative text-zinc-800
              } pl-2 pt-5 border-b border-gray-300 ${
                errors.phoneNumber
                  ? "border-red-600"
                  : "hover:border-slate-200 focus:border-blue-400"
              }`}
              type="number"
              {...register("phoneNumber", {
                required: "This field is required",
                pattern: {
                  value: /^01[0125][0-9]{8}$/gm,
                  message: "invalid Phone Number",
                },
              })}
            />
            <p className="mt-1 text-red-600 text-sm">
              {errors.phoneNumber?.message}
            </p>
          </div>
          <div
            className={`w-full h-14 relative bg-white
            rounded-tl-md rounded-tr-md`}
          >
            <label
              className={`absolute left-2 top-2 z-10 text-sm text-zinc-600`}
            >
              Address
            </label>
            <input
              className={`size-full bg-transparent outline-none relative text-zinc-800
              pl-2 pt-5 border-b border-gray-300 ${
                errors.address
                  ? "border-red-600"
                  : "hover:border-slate-200 focus:border-blue-400"
              }`}
              type="text"
              {...register("address", { required: "This field is required" })}
            />
            <p className="mt-1 text-red-600 text-sm">
              {errors.address?.message}
            </p>
          </div>
          <div
            className={`w-full h-14 relative bg-white
            rounded-tl-md rounded-tr-md`}
          >
            <label
              className={`absolute left-2 top-2 z-10 text-sm text-zinc-600`}
            >
              City
            </label>
            <input
              className={`size-full bg-transparent outline-none relative text-zinc-800
              pl-2 pt-5 border-b border-gray-300 ${
                errors.city
                  ? "border-red-600"
                  : "hover:border-slate-200 focus:border-blue-400"
              }`}
              type="text"
              {...register("city", { required: "This field is required" })}
            />
            <p className="mt-1 text-red-600 text-sm">
              {errors.city?.message}
            </p>
          </div>
          <div
            className={`w-40 h-10 flex items-center justify-center ml-auto`}
          >
            <input
              className={`size-full bg-sky-950 outline-none relative text-white text-sm font-medium rounded-md hover:bg-blue-500 duration-300 cursor-pointer`}
              type="submit"
              value="Create New User"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
