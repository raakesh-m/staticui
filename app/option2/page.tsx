"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Option2() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="w-full max-w-sm mx-auto bg-white min-h-screen shadow-2xl relative border border-slate-300">
        <div className="bg-white border-b-2 border-slate-300 px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/">
              <button className="bg-slate-100 border border-slate-400 p-2 rounded shadow hover:shadow-md transition-all min-w-[44px] min-h-[44px] flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-slate-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </Link>

            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="List Software Logo"
                width={28}
                height={28}
                className="rounded"
              />
              <div className="text-center">
                <h1 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                  LIST SOFTWARE
                </h1>
                <p className="text-xs text-slate-600 uppercase">
                  BANKING DIVISION
                </p>
              </div>
            </div>

            <div className="bg-slate-200 px-2 py-1 rounded border border-slate-400">
              <span className="text-xs font-bold text-slate-700 uppercase">
                ENT
              </span>
            </div>
          </div>
        </div>

        <div className="pb-8">
          <Dashboard />
          <BeneficiaryManagement />
          <DepositsScreen />
          <TransferScreen />
          <ExitDialog />
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="List Software"
                  width={40}
                  height={40}
                  className="rounded-lg shadow-md"
                />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-900">
                  LIST SOFTWARE
                </h1>
                <p className="text-xs text-slate-600">
                  Corporate Banking Platform
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-500">Welcome back</p>
              <p className="font-semibold text-slate-900">Sanjeev Kulkarni</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-slate-300 text-sm">Total Balance</p>
              <h2 className="text-3xl font-bold">₹86.3 Cr</h2>
            </div>
            <div className="bg-white/10 p-3 rounded-xl">
              <Image
                src="/logo.png"
                alt="List Software"
                width={24}
                height={24}
                className="rounded opacity-90"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-xs">Account Number</p>
              <p className="font-mono text-sm">****7471</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm text-slate-300">Active</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-lg">↗</span>
              </div>
              <div>
                <p className="text-xs text-slate-600">This Month</p>
                <p className="font-bold text-slate-900">+₹1.2 Cr</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-lg">📊</span>
              </div>
              <div>
                <p className="text-xs text-slate-600">Investments</p>
                <p className="font-bold text-slate-900">₹24.7 Cr</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4">
        <h3 className="text-sm font-semibold text-slate-900 mb-3">
          Quick Actions
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: "Transfer", icon: "💸", color: "bg-blue-500" },
            { name: "Deposits", icon: "💰", color: "bg-green-500" },
            { name: "Beneficiary", icon: "👥", color: "bg-purple-500" },
            { name: "Statements", icon: "📄", color: "bg-orange-500" },
          ].map((action, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center text-white`}
                >
                  <span className="text-lg">{action.icon}</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">
                    {action.name}
                  </p>
                  <p className="text-xs text-slate-600">Tap to access</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 pb-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-900">Recent Activity</h3>
          <button className="bg-blue-50 text-blue-600 px-3 py-2 rounded-lg text-xs font-semibold hover:bg-blue-100 transition-colors">
            View All
          </button>
        </div>

        <div className="space-y-3">
          {[
            {
              type: "Transfer Out",
              amount: "-₹50,000",
              date: "24 Dec",
              time: "2:30 PM",
              color: "text-red-600",
              bgColor: "bg-red-50",
              iconBg: "bg-red-100",
              borderColor: "border-red-100",
              icon: "🔄",
              description: "To John Smith",
            },
            {
              type: "Deposit",
              amount: "+₹1,25,000",
              date: "23 Dec",
              time: "11:45 AM",
              color: "text-green-600",
              bgColor: "bg-green-50",
              iconBg: "bg-green-100",
              borderColor: "border-green-100",
              icon: "💰",
              description: "Salary Credit",
            },
            {
              type: "Interest Credit",
              amount: "+₹8,450",
              date: "22 Dec",
              time: "9:00 AM",
              color: "text-green-600",
              bgColor: "bg-blue-50",
              iconBg: "bg-blue-100",
              borderColor: "border-blue-100",
              icon: "💎",
              description: "Monthly Interest",
            },
          ].map((transaction, index) => (
            <div
              key={index}
              className={`${transaction.bgColor} rounded-2xl p-4 border ${transaction.borderColor} hover:shadow-lg transition-all duration-200 cursor-pointer`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 ${transaction.iconBg} rounded-2xl flex items-center justify-center shadow-sm`}
                  >
                    <span className="text-xl">{transaction.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 text-base">
                      {transaction.type}
                    </h4>
                    <p className="text-sm text-slate-600 mb-1">
                      {transaction.description}
                    </p>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-slate-500 bg-white px-2 py-1 rounded-full">
                        {transaction.date}
                      </span>
                      <span className="text-xs text-slate-500">
                        {transaction.time}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-bold text-lg ${transaction.color}`}>
                    {transaction.amount}
                  </p>
                  <div className="flex items-center justify-end mt-1">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        transaction.color === "text-red-600"
                          ? "bg-red-400"
                          : "bg-green-400"
                      } mr-2`}
                    ></div>
                    <span className="text-xs text-slate-500">Completed</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Activity Summary */}
        <div className="mt-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4 border border-purple-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <span className="text-purple-600 text-lg">📊</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">
                  This Week's Summary
                </h4>
                <p className="text-xs text-slate-600">
                  3 transactions completed
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-green-600">+₹83,450</p>
              <p className="text-xs text-slate-500">Net inflow</p>
            </div>
          </div>
        </div>
      </div>

      {/* Banking Services */}
      <div className="px-4 pb-6">
        <h3 className="text-sm font-semibold text-slate-900 mb-3">
          Banking Services
        </h3>
        <div className="grid grid-cols-1 gap-3">
          {[
            {
              name: "Term Deposits",
              desc: "Fixed deposits & investments",
              icon: "🏦",
            },
            { name: "Loans & Advances", desc: "Credit facilities", icon: "💳" },
            {
              name: "Cheque Services",
              desc: "Cheque book & status",
              icon: "📝",
            },
            { name: "ATM Services", desc: "Card management", icon: "🏧" },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <span className="text-lg">{service.icon}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">
                      {service.name}
                    </p>
                    <p className="text-xs text-slate-600">{service.desc}</p>
                  </div>
                </div>
                <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center">
                  <span className="text-slate-600 text-xs">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 pb-6">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Image
                src="/logo.png"
                alt="List Software"
                width={20}
                height={20}
                className="rounded"
              />
              <span className="text-xs text-slate-600 font-semibold">
                List Software Banking
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Secure • Reliable • Enterprise Grade
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Beneficiary Management - Table Style
function BeneficiaryManagement() {
  return (
    <div className="bg-slate-50 border-t-4 border-slate-400">
      {/* Module Header */}
      <div className="bg-slate-700 text-white p-4">
        <h1 className="text-base font-bold uppercase tracking-wide">
          BENEFICIARY MANAGEMENT SYSTEM
        </h1>
        <p className="text-slate-300 text-xs">
          Module: BEN001 | Access Level: FULL
        </p>
      </div>

      {/* Action Toolbar */}
      <div className="bg-slate-600 text-white px-4 py-3">
        <div className="flex justify-between items-center">
          <span className="text-xs font-semibold">AVAILABLE ACTIONS:</span>
          <span className="text-xs">Total Beneficiaries: 12</span>
        </div>
      </div>

      <div className="p-4">
        {/* Add Beneficiary Section */}
        <div className="mb-6">
          <h2 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide border-b border-slate-300 pb-1">
            ADD NEW BENEFICIARY
          </h2>
          <div className="grid grid-cols-1 gap-3">
            <button className="bg-white border-2 border-slate-300 rounded-md p-4 text-left hover:bg-slate-50 transition-all min-h-[60px] flex items-center">
              <div className="flex items-center justify-between w-full">
                <div>
                  <p className="text-sm font-bold text-slate-900">SAME BANK</p>
                  <p className="text-xs text-slate-600">
                    Internal Transfer Setup
                  </p>
                </div>
                <div className="bg-slate-200 w-10 h-10 rounded-sm flex items-center justify-center">
                  <span className="text-slate-600 font-bold">+</span>
                </div>
              </div>
            </button>
            <button className="bg-white border-2 border-slate-300 rounded-md p-4 text-left hover:bg-slate-50 transition-all min-h-[60px] flex items-center">
              <div className="flex items-center justify-between w-full">
                <div>
                  <p className="text-sm font-bold text-slate-900">OTHER BANK</p>
                  <p className="text-xs text-slate-600">
                    External Transfer Setup
                  </p>
                </div>
                <div className="bg-slate-200 w-10 h-10 rounded-sm flex items-center justify-center">
                  <span className="text-slate-600 font-bold">+</span>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Beneficiary Registry */}
        <div>
          <h2 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide border-b border-slate-300 pb-1">
            BENEFICIARY REGISTRY
          </h2>
          <div className="bg-white border border-slate-300 rounded-md">
            <table className="w-full text-xs">
              <thead className="bg-slate-200">
                <tr>
                  <th className="px-3 py-3 text-left font-bold text-slate-700 uppercase">
                    BENEFICIARY
                  </th>
                  <th className="px-3 py-3 text-center font-bold text-slate-700 uppercase">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    id: "BEN001",
                    name: "JOHN SMITH",
                    bank: "SAME BANK",
                    account: "****1234",
                    status: "ACTIVE",
                  },
                  {
                    id: "BEN002",
                    name: "SARAH WILSON",
                    bank: "HDFC BANK",
                    account: "****5678",
                    status: "ACTIVE",
                  },
                  {
                    id: "BEN003",
                    name: "MIKE JOHNSON",
                    bank: "ICICI BANK",
                    account: "****9012",
                    status: "ACTIVE",
                  },
                  {
                    id: "BEN004",
                    name: "PRIYA SHARMA",
                    bank: "SBI BANK",
                    account: "****3456",
                    status: "PENDING",
                  },
                ].map((beneficiary, index) => (
                  <tr key={index} className="border-b border-slate-100">
                    <td className="px-3 py-4">
                      <div>
                        <p className="font-mono font-bold text-slate-900 text-xs mb-1">
                          {beneficiary.id}
                        </p>
                        <p className="font-bold text-slate-900 text-sm">
                          {beneficiary.name}
                        </p>
                        <p className="text-slate-600 text-xs">
                          {beneficiary.bank} • {beneficiary.account}
                        </p>
                        <span
                          className={`inline-block text-xs px-2 py-1 rounded mt-1 ${
                            beneficiary.status === "ACTIVE"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {beneficiary.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-3 py-4 text-center">
                      <div className="flex justify-center space-x-2">
                        <button className="bg-blue-100 text-blue-700 px-3 py-2 rounded text-xs font-bold min-w-[44px] min-h-[36px]">
                          EDIT
                        </button>
                        <button className="bg-red-100 text-red-700 px-3 py-2 rounded text-xs font-bold min-w-[44px] min-h-[36px]">
                          DEL
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// Deposits Screen - Detailed Table View
function DepositsScreen() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  return (
    <div className="bg-white border-t-4 border-slate-400">
      {/* Module Header */}
      <div className="bg-slate-700 text-white p-4">
        <h1 className="text-base font-bold uppercase tracking-wide">
          INVESTMENT PORTFOLIO MANAGER
        </h1>
        <p className="text-slate-300 text-xs">
          Module: DEP001 | Total Value: ₹24.7 Cr
        </p>
      </div>

      {/* Summary Dashboard */}
      <div className="bg-slate-100 p-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white border border-slate-300 rounded-md p-4 text-center">
            <p className="text-xs text-slate-600 uppercase font-semibold mb-1">
              TOTAL PORTFOLIO
            </p>
            <p className="text-2xl font-bold text-slate-900">₹24.7 Cr</p>
            <p className="text-xs text-green-600">+12.5% YTD</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border border-slate-300 rounded-md p-4 text-center">
              <p className="text-xs text-slate-600 uppercase font-semibold mb-1">
                ACTIVE DEPOSITS
              </p>
              <p className="text-lg font-bold text-slate-900">8</p>
              <p className="text-xs text-slate-600">Instruments</p>
            </div>
            <div className="bg-white border border-slate-300 rounded-md p-4 text-center">
              <p className="text-xs text-slate-600 uppercase font-semibold mb-1">
                AVG RETURN
              </p>
              <p className="text-lg font-bold text-slate-900">7.2%</p>
              <p className="text-xs text-slate-600">Per Annum</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="bg-slate-600 text-white px-4 py-3">
        <div className="flex flex-wrap gap-2">
          {["ALL", "FIXED DEPOSITS", "SIP PLANS"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-2 rounded text-xs font-bold transition-all min-h-[40px] ${
                selectedCategory === category
                  ? "bg-white text-slate-900"
                  : "bg-slate-500 text-white hover:bg-slate-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Detailed Portfolio Table */}
      <div className="p-4">
        <div className="bg-white border border-slate-300 rounded-md">
          <table className="w-full text-xs">
            <thead className="bg-slate-200">
              <tr>
                <th className="px-3 py-3 text-left font-bold text-slate-700 uppercase">
                  INSTRUMENT
                </th>
                <th className="px-3 py-3 text-right font-bold text-slate-700 uppercase">
                  VALUE
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: "FD-7527",
                  type: "FIXED DEPOSIT",
                  amount: "₹5.5 Cr",
                  rate: "6.5%",
                  maturity: "MAR 2025",
                  status: "ACTIVE",
                  color: "green",
                },
                {
                  id: "FD-7655",
                  type: "FIXED DEPOSIT",
                  amount: "₹3.2 Cr",
                  rate: "6.8%",
                  maturity: "JUN 2025",
                  status: "ACTIVE",
                  color: "green",
                },
                {
                  id: "SIP-6089",
                  type: "SIP PLAN",
                  amount: "₹2.1 Cr",
                  rate: "12.3%",
                  maturity: "ONGOING",
                  status: "ACTIVE",
                  color: "blue",
                },
                {
                  id: "FD-3336",
                  type: "FIXED DEPOSIT",
                  amount: "₹4.8 Cr",
                  rate: "7.1%",
                  maturity: "DEC 2024",
                  status: "MATURING",
                  color: "yellow",
                },
              ].map((deposit, index) => (
                <tr key={index} className="border-b border-slate-100">
                  <td className="px-3 py-4">
                    <div>
                      <p className="font-bold text-slate-900 text-sm">
                        {deposit.type}
                      </p>
                      <p className="text-slate-600 font-mono text-xs">
                        {deposit.id}
                      </p>
                      <span
                        className={`inline-block text-xs px-2 py-1 rounded font-bold mt-1 ${
                          deposit.color === "green"
                            ? "bg-green-100 text-green-800"
                            : deposit.color === "blue"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {deposit.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-4 text-right">
                    <p className="font-bold text-slate-900">{deposit.amount}</p>
                    <p className="text-green-600 font-bold">{deposit.rate}</p>
                    <p className="text-slate-600 text-xs">{deposit.maturity}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 grid grid-cols-1 gap-3">
          <button className="bg-slate-700 text-white py-4 rounded-md font-bold text-sm uppercase tracking-wide hover:bg-slate-800 transition-all min-h-[48px]">
            GENERATE REPORT
          </button>
          <button className="bg-white border-2 border-slate-300 text-slate-700 py-4 rounded-md font-bold text-sm uppercase tracking-wide hover:bg-slate-50 transition-all min-h-[48px]">
            EXPORT DATA
          </button>
        </div>
      </div>
    </div>
  );
}

// Transfer Screen - Form-based Enterprise Style
function TransferScreen() {
  return (
    <div className="bg-slate-50 border-t-4 border-slate-400">
      {/* Module Header */}
      <div className="bg-slate-700 text-white p-4">
        <h1 className="text-base font-bold uppercase tracking-wide">
          FUND TRANSFER SYSTEM
        </h1>
        <p className="text-slate-300 text-xs">
          Module: TXN001 | Transaction Limit: ₹10,00,000
        </p>
      </div>

      {/* Security Notice */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <p className="text-xs text-yellow-800 font-semibold">
          ⚠️ SECURITY NOTICE: All transactions are logged and monitored for
          compliance.
        </p>
      </div>

      <div className="p-4">
        {/* Transfer Form */}
        <div className="bg-white border border-slate-300 rounded-md">
          <div className="bg-slate-200 px-4 py-3 border-b border-slate-300">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
              TRANSFER DETAILS
            </h2>
          </div>

          <div className="p-4 space-y-6">
            {/* Source Account */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">
                DEBIT ACCOUNT
              </label>
              <div className="bg-slate-50 border-2 border-slate-300 rounded-md p-4">
                <div className="grid grid-cols-1 gap-3 text-xs">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-slate-600 uppercase font-semibold mb-1">
                        ACCOUNT NUMBER
                      </p>
                      <p className="text-slate-900 font-mono font-bold">
                        002000101000097471
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-600 uppercase font-semibold mb-1">
                        ACCOUNT TYPE
                      </p>
                      <p className="text-slate-900 font-bold">
                        PRIMARY SAVINGS
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-slate-600 uppercase font-semibold mb-1">
                        AVAILABLE BALANCE
                      </p>
                      <p className="text-slate-900 font-bold text-lg">
                        ₹86.3 Cr
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-600 uppercase font-semibold mb-1">
                        STATUS
                      </p>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">
                        ACTIVE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transfer Amount */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">
                TRANSFER AMOUNT (INR)
              </label>
              <div className="relative">
                <input
                  type="number"
                  defaultValue="10"
                  className="w-full border-2 border-slate-300 rounded-md py-4 px-4 text-lg font-bold text-slate-900 focus:outline-none focus:border-slate-500 bg-white min-h-[56px]"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <span className="text-slate-500 font-bold">₹</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Maximum daily limit: ₹10,00,000
              </p>
            </div>

            {/* Destination Account */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">
                CREDIT ACCOUNT
              </label>
              <div className="bg-slate-50 border-2 border-slate-300 rounded-md p-4">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <p className="text-slate-600 uppercase font-semibold mb-1">
                      ACCOUNT NUMBER
                    </p>
                    <p className="text-slate-900 font-mono font-bold">
                      002000101000097471
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-600 uppercase font-semibold mb-1">
                      ACCOUNT TYPE
                    </p>
                    <p className="text-slate-900 font-bold">SAVINGS ACCOUNT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Transaction Details */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">
                TRANSACTION REFERENCE
              </label>
              <input
                type="text"
                defaultValue="Test"
                className="w-full border-2 border-slate-300 rounded-md py-4 px-4 text-slate-900 focus:outline-none focus:border-slate-500 bg-white min-h-[48px]"
                placeholder="Enter transaction reference..."
              />
            </div>

            {/* Verification */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
              <h3 className="text-xs font-bold text-yellow-800 mb-3 uppercase">
                VERIFICATION REQUIRED
              </h3>
              <div className="grid grid-cols-1 gap-3">
                <div>
                  <label className="block text-xs text-yellow-700 font-semibold mb-2">
                    OTP
                  </label>
                  <input
                    type="text"
                    className="w-full border border-yellow-300 rounded py-3 px-3 text-sm min-h-[48px]"
                    placeholder="Enter 6-digit OTP"
                  />
                </div>
                <div>
                  <label className="block text-xs text-yellow-700 font-semibold mb-2">
                    MPIN
                  </label>
                  <input
                    type="password"
                    className="w-full border border-yellow-300 rounded py-3 px-3 text-sm min-h-[48px]"
                    placeholder="Enter MPIN"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 space-y-3">
          <button className="w-full bg-slate-700 text-white py-4 rounded-md font-bold text-sm uppercase tracking-wide hover:bg-slate-800 transition-all min-h-[56px]">
            AUTHORIZE TRANSFER
          </button>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-white border-2 border-slate-300 text-slate-700 py-3 rounded-md font-bold text-xs uppercase tracking-wide hover:bg-slate-50 transition-all min-h-[48px]">
              PREVIEW
            </button>
            <button className="bg-white border-2 border-slate-300 text-slate-700 py-3 rounded-md font-bold text-xs uppercase tracking-wide hover:bg-slate-50 transition-all min-h-[48px]">
              SAVE DRAFT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Exit Dialog - System Style
function ExitDialog() {
  return (
    <div className="bg-white border-t-4 border-slate-400 p-4">
      {/* System Header */}
      <div className="bg-slate-800 text-white p-4 rounded-md mb-4">
        <h1 className="text-base font-bold uppercase tracking-wide">
          SYSTEM LOGOUT
        </h1>
        <p className="text-slate-300 text-xs">Security Protocol: ACTIVE</p>
      </div>

      <div className="bg-white border border-slate-300 rounded-md p-6">
        <div className="text-center">
          <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-red-600 text-2xl font-bold">!</span>
          </div>

          <h2 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-wide">
            SESSION TERMINATION
          </h2>

          <p className="text-sm text-slate-600 mb-6">
            Are you sure you want to terminate your secure banking session?
          </p>

          {/* Security Notice */}
          <div className="bg-slate-50 border border-slate-200 rounded-md p-4 mb-6 text-xs">
            <p className="text-slate-700">
              <strong>SECURITY REMINDER:</strong> Ensure all sensitive data is
              secured before logout. All transaction drafts will be
              automatically saved.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-md font-bold text-sm uppercase tracking-wide transition-all min-h-[56px]">
              CONFIRM LOGOUT
            </button>
            <button className="w-full bg-slate-200 hover:bg-slate-300 text-slate-800 py-4 rounded-md font-bold text-sm uppercase tracking-wide transition-all min-h-[56px]">
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
