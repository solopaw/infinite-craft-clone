'use client';
import { useState } from "react";
import Button, { ButtonVariant } from "./ui/button";
import Input from "./ui/input";
import { Eye, EyeClosed as EyeSlash } from "lucide-react";
export default function BasicForm({
    title,
    description,
   
    }: {
    title: string;
    description: string;
    }) {
        let [isShowingPassword,toggleIsShowingPassword] = useState(false);
    return (
        <form
        className="flex flex-col gap-4 w-full max-w-md"
        // onSubmit={onSubmit}
        >
        <h1 className="text-2xl font-bold text-gray-200">{title}</h1>
        <p className="text-gray-400">{description}</p>
        <Input label={"username"} placeholder={"enter username here"} error={"test"} isDisabled={false} isRequired={false} id={"username"} name={"username"}></Input>
        <div className="flex flex-row">
            <Input label={"password"} placeholder={"enter password here"} isPassword={isShowingPassword} error={"test"} isDisabled={false} isRequired={false} id={"password"} name={"password"}></Input>
            <Button variant={ButtonVariant.TERTIARY} onClick={() => {
                toggleIsShowingPassword(!isShowingPassword);
            }}>{
                isShowingPassword ? <EyeSlash></EyeSlash> : <Eye></Eye>
                
                }</Button>
        </div>
        <Button variant={ButtonVariant.PRIMARY}>Submit</Button>
        </form>
    );
    }