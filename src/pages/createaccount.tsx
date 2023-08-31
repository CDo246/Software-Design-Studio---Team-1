import Link from "next/link";
import { BlackBackButton, BlackButton } from "~/components/button";
import { FormBox } from "~/components/formBox";
import { CentredLayout } from "~/components/layouts";

export default function CreateAccount() {
    return (
        <CentredLayout title="Create Account">
            <FormBox>
                <Link href="/">
                    <BlackBackButton/>
                </Link>
                <hr/>
                <input className="rounded-xl border-2 border-black p-3" type="text" placeholder="First Name"></input>
                <input className="rounded-xl border-2 border-black p-3" type="text" placeholder="Last Name"></input>
                <input className="rounded-xl border-2 border-black p-3" type="text" placeholder="Educational Institution"></input>
                <hr/>
                <BlackButton text="Create Account" />
            </FormBox>
        </CentredLayout>
    )
}