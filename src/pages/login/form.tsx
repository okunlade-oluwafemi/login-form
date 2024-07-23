import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Login } from "./login";

interface FormData {
    email: string;
    password: string;
}

export const Form = () => { 
    const schema = yup.object().shape({
        email: yup.string().required("You must add an email address."),
        password: yup.string().required("You must add a password."),
    });

    const { register, handleSubmit, formState: { errors} } = useForm < FormData>({
        resolver: yupResolver(schema),
    })

    const onLogin = (data: FormData) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onLogin)}> 
            <input placeholder="Email ID" {...register("email")} />
            <p style={{ color: "red "}}> {errors.email?.message} </p>
            <input placeholder="Password" {...register("password")} />
            <p style={{ color: "red "}}> {errors.password?.message} </p>
            <button onClick={Login}>LOGIN</button>
        </form>
    );
};


