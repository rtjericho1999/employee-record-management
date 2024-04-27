"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [employees, setEmployees] = useState(null);
  useEffect(() => {
    if (!employees) {
      axios
        .get("/api/employee")
        .then((res) => setEmployees(res.data))
        .catch((err) => console.log(err));
    }
  }, [employees]);
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center">
      <h1>Employee Record Management</h1>
      <div className="w-full pr-2 flex justify-end">
        <Link
          className="p-2 border border-[#eeeeee] rounded-full"
          href="/create"
        >
          Create Employee
        </Link>
      </div>
      <div className="w-full px-2 grid grid-cols-7">
        <p>ID Number</p>
        <p>Profile Picture</p>
        <p>First Name</p>
        <p>Middle Name</p>
        <p>Last Name</p>
        <p>Position</p>
      </div>
      {employees &&
        employees.map((employee, index) => (
          <div
            className="w-full h-[10vh] px-2 grid grid-cols-7 items-center"
            key={index}
          >
            <p>{employee?.id}</p>
            <div className="w-full object-cover">
              <Image
                src={employee?.profilePicture}
                alt=""
                width={150}
                height={150}
              />
            </div>
            <p>{employee?.firstName}</p>
            <p>{employee?.middleName}</p>
            <p>{employee?.lastName}</p>
            <p>{employee?.position}</p>
            <button
              className="p-2 border border-[#eeeeee] rounded-full"
              onClick={() => router.push(`/viewEmployee/${employee?.id}`)}
            >
              View
            </button>
          </div>
        ))}
    </main>
  );
}
