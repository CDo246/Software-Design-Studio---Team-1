import Link from "next/link";
import { GrowFormBox } from "~/components/formBox";
import { SidebarLayout } from "~/components/layouts";
import { Sidebar } from "~/components/sidebar";

export default function Session() {
    return (
        <SidebarLayout title="Session">               
            <Sidebar>
                <div className="flex-1"/>
                <Link href="/">
                    <p className="text-gray-600">Verify Session</p>
                </Link>
                <Link href="/">
                    <p className="text-gray-600">Settings</p>
                </Link>
            </Sidebar>
            <div className="items-center justify-center p-10">
                <div className="flex flex-col min-h-full margin-auto"> 
                    <GrowFormBox>
                    </GrowFormBox>
                </div>
            </div>
        </SidebarLayout>
    )
}