"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Option1() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full max-w-sm mx-auto bg-white min-h-screen shadow-2xl relative">
        <div className="bg-white border-b border-gray-100 px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <button className="bg-gray-50 p-3 rounded-full shadow-sm hover:shadow-md transition-all border border-gray-200 min-w-[44px] min-h-[44px] flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-gray-600"
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
                width={32}
                height={32}
                className="rounded-lg"
              />
              <div className="text-right">
                <h1 className="text-lg font-bold text-gray-900">
                  List Software
                </h1>
                <p className="text-xs text-gray-500">Banking Solutions</p>
              </div>
            </div>

            <div className="bg-blue-100 p-2 rounded-full border border-blue-200 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-blue-700"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
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
    <div className="px-4 space-y-6 pt-6">
      <div className="text-center">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-6 border border-blue-100">
          <Image
            src="/logo.png"
            alt="List Software"
            width={64}
            height={64}
            className="mx-auto rounded-2xl shadow-lg mb-4"
          />
          <h2 className="text-xl font-bold text-gray-900 mb-1">
            List Software
          </h2>
          <p className="text-sm text-blue-600 font-medium">
            Powered Banking Platform
          </p>
          <div className="inline-flex items-center bg-blue-50 px-4 py-2 rounded-full mt-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-sm font-medium text-blue-700">Dashboard</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="relative p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="absolute top-4 right-4 opacity-20"></div>
          <div className="absolute top-4 right-12">
            <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg"></div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white text-xl font-bold">SK</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Hello, Sanjeev!
              </h2>
              <p className="text-gray-600 text-sm">
                Welcome to List Software Banking
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">Primary Account</span>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600">
              Active
            </span>
          </div>
          <div className="space-y-2">
            <p className="font-mono text-sm text-gray-700">
              **** **** **** 7471
            </p>
            <div className="flex justify-between items-end">
              <span className="text-3xl font-bold text-gray-900">₹86.3 Cr</span>
              <span className="text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full">
                +2.3%
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
        </div>
        <div className="grid grid-cols-3 gap-4 items-start">
          {[
            {
              name: "Demand Deposit",
              icon: "💰",
              color: "from-green-400 to-green-600",
              desc: "Instant deposits",
            },
            {
              name: "Term Deposit",
              icon: "⏰",
              color: "from-red-400 to-red-600",
              desc: "Fixed deposits",
            },
            {
              name: "Loan/Advances",
              icon: "💳",
              color: "from-yellow-400 to-yellow-600",
              desc: "Credit facility",
            },
            {
              name: "Fund Transfer",
              icon: "💸",
              color: "from-emerald-400 to-emerald-600",
              desc: "Send money",
            },
            {
              name: "Manage Beneficiary",
              icon: "👥",
              color: "from-purple-400 to-purple-600",
              desc: "Manage contacts",
            },
            {
              name: "Mini Statement",
              icon: "📊",
              color: "from-orange-400 to-orange-600",
              desc: "Quick view",
            },
            {
              name: "Cheque Related",
              icon: "📋",
              color: "from-blue-400 to-blue-600",
              desc: "Cheque services",
            },
            {
              name: "Other Services",
              icon: "⚙️",
              color: "from-gray-400 to-gray-600",
              desc: "More options",
            },
            {
              name: "ATM Related",
              icon: "🏧",
              color: "from-indigo-400 to-indigo-600",
              desc: "ATM services",
            },
          ].map((action, index) => (
            <div key={index} className="group w-full">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-4 border border-gray-100 group-hover:scale-105 h-[130px] flex flex-col justify-center items-center text-center cursor-pointer w-full">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center mb-3 shadow-md`}
                >
                  <span className="text-xl">{action.icon}</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-xs mb-1 leading-tight">
                  {action.name}
                </h4>
                <p className="text-xs text-gray-500 leading-tight">
                  {action.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900 flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            Recent Activity
          </h3>
        </div>
        <div className="space-y-4">
          {[
            {
              type: "Transfer",
              amount: "- ₹50,000",
              time: "2 hours ago",
              icon: "↗️",
              bgColor: "bg-red-50",
              iconColor: "text-red-600",
            },
            {
              type: "Deposit",
              amount: "+ ₹1,25,000",
              time: "Yesterday",
              icon: "💳",
              bgColor: "bg-green-50",
              iconColor: "text-green-600",
            },
            {
              type: "Interest",
              amount: "+ ₹8,450",
              time: "3 days ago",
              icon: "💰",
              bgColor: "bg-blue-50",
              iconColor: "text-blue-600",
            },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 border-b border-gray-50 last:border-b-0"
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-12 h-12 ${activity.bgColor} rounded-full flex items-center justify-center`}
                >
                  <span className={`text-lg ${activity.iconColor}`}>
                    {activity.icon}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {activity.type}
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
              <span
                className={`text-sm font-semibold ${
                  activity.amount.startsWith("+")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {activity.amount}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Powered By Footer */}
      <div className="text-center py-4">
        <div className="flex items-center justify-center space-x-2 opacity-60">
          <Image
            src="/logo.png"
            alt="List Software"
            width={16}
            height={16}
            className="rounded"
          />
          <span className="text-xs text-gray-500">
            Powered by List Software
          </span>
        </div>
      </div>
    </div>
  );
}

// Beneficiary Management - List Style
function BeneficiaryManagement() {
  return (
    <div className="px-4 space-y-6 bg-gray-50 py-8">
      {/* Section Header */}
      <div className="text-center">
        <div className="inline-flex items-center bg-purple-50 px-4 py-3 rounded-full">
          <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium text-purple-700">
            Beneficiary Management
          </span>
        </div>
      </div>

      {/* Add New Beneficiary - Featured Card */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold mb-2">Add New Beneficiary</h3>
            <p className="text-purple-100 text-sm">
              Quickly add trusted contacts for transfers
            </p>
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
            <span className="text-2xl">➕</span>
          </div>
        </div>
        <div className="flex space-x-3">
          <button className="flex-1 bg-white/20 rounded-xl py-3 px-3 text-center text-sm font-medium min-h-[48px] flex items-center justify-center">
            Same Bank
          </button>
          <button className="flex-1 bg-white/20 rounded-xl py-3 px-3 text-center text-sm font-medium min-h-[48px] flex items-center justify-center">
            Other Bank
          </button>
        </div>
      </div>

      {/* Existing Beneficiaries */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Your Beneficiaries
        </h3>
        <div className="space-y-3">
          {[
            {
              name: "John Smith",
              bank: "Same Bank",
              account: "****1234",
              avatar: "JS",
            },
            {
              name: "Sarah Wilson",
              bank: "HDFC Bank",
              account: "****5678",
              avatar: "SW",
            },
            {
              name: "Mike Johnson",
              bank: "ICICI Bank",
              account: "****9012",
              avatar: "MJ",
            },
          ].map((beneficiary, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-600">
                      {beneficiary.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">
                      {beneficiary.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {beneficiary.bank} • {beneficiary.account}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center min-w-[44px] min-h-[44px]">
                    <span className="text-blue-600 text-sm">💸</span>
                  </button>
                  <button className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center min-w-[44px] min-h-[44px]">
                    <span className="text-red-600 text-sm">🗑</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Deposits Screen - Portfolio Style
function DepositsScreen() {
  const [selectedTab, setSelectedTab] = useState("all");

  return (
    <div className="px-4 space-y-6 py-8">
      {/* Section Header */}
      <div className="text-center">
        <div className="inline-flex items-center bg-emerald-50 px-4 py-3 rounded-full">
          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium text-emerald-700">
            Investment Portfolio
          </span>
        </div>
      </div>

      {/* Portfolio Summary */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-6 border border-emerald-100">
        <div className="text-center">
          <p className="text-sm text-emerald-700 mb-2">Total Portfolio Value</p>
          <p className="text-3xl font-bold text-emerald-900 mb-1">₹24.7 Cr</p>
          <p className="text-sm text-emerald-600">+12.5% this year</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="text-center">
            <p className="text-xs text-gray-600 mb-1">Fixed Deposits</p>
            <p className="text-lg font-bold text-gray-900">₹18.2 Cr</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-600 mb-1">Investment Plans</p>
            <p className="text-lg font-bold text-gray-900">₹6.5 Cr</p>
          </div>
        </div>
      </div>

      {/* Filter Tabs - Mobile Optimized */}
      <div className="flex bg-gray-100 rounded-2xl p-1">
        {[
          { id: "all", label: "All" },
          { id: "fd", label: "Fixed Deposits" },
          { id: "sip", label: "SIP Plans" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={`flex-1 py-3 px-3 rounded-xl text-sm font-medium transition-all min-h-[48px] flex items-center justify-center ${
              selectedTab === tab.id
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Deposits List */}
      <div className="space-y-4">
        {[
          {
            id: "7527",
            type: "Fixed Deposit",
            amount: "₹5.5 Cr",
            rate: "6.5%",
            maturity: "Mar 2025",
            status: "active",
            color: "emerald",
          },
          {
            id: "7655",
            type: "Fixed Deposit",
            amount: "₹3.2 Cr",
            rate: "6.8%",
            maturity: "Jun 2025",
            status: "active",
            color: "blue",
          },
          {
            id: "6089",
            type: "SIP Plan",
            amount: "₹2.1 Cr",
            rate: "12.3%",
            maturity: "Ongoing",
            status: "active",
            color: "purple",
          },
        ].map((deposit, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
          >
            <div
              className={`h-1 bg-gradient-to-r from-${deposit.color}-400 to-${deposit.color}-600`}
            ></div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 text-base">
                    {deposit.type}
                  </h4>
                  <p className="text-xs text-gray-500">ID: ****{deposit.id}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium bg-${deposit.color}-50 text-${deposit.color}-700`}
                >
                  {deposit.status}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Amount</p>
                  <p className="text-sm font-bold text-gray-900">
                    {deposit.amount}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Rate</p>
                  <p className="text-sm font-bold text-green-600">
                    {deposit.rate}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Maturity</p>
                  <p className="text-sm font-bold text-gray-900">
                    {deposit.maturity}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Transfer Screen - Modern Form
function TransferScreen() {
  return (
    <div className="px-4 space-y-6 bg-gray-50 py-8">
      {/* Section Header */}
      <div className="text-center">
        <div className="inline-flex items-center bg-orange-50 px-4 py-3 rounded-full">
          <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium text-orange-700">
            Quick Transfer
          </span>
        </div>
      </div>

      {/* Transfer Form */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-orange-400 to-red-500 p-6 text-white">
          <h3 className="text-xl font-bold mb-2">Send Money</h3>
          <p className="text-orange-100 text-sm">
            Transfer funds between your accounts
          </p>
        </div>

        <div className="p-6 space-y-6">
          {/* Account Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              From Account
            </label>
            <div className="bg-gray-50 rounded-2xl p-4 border-2 border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">Primary Savings</p>
                  <p className="text-sm text-gray-600">****7471</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900">₹86.3 Cr</p>
                  <p className="text-xs text-gray-500">Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Amount Input - Mobile Optimized */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Amount
            </label>
            <div className="relative">
              <input
                type="number"
                defaultValue="10"
                className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl py-5 px-4 text-2xl font-bold text-gray-900 focus:outline-none focus:border-orange-400 focus:bg-white transition-all min-h-[60px]"
                placeholder="0"
              />
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-lg font-semibold text-gray-500">
                ₹
              </span>
            </div>
          </div>

          {/* Quick Amount Buttons - Larger Touch Targets */}
          <div className="grid grid-cols-4 gap-3">
            {["1K", "5K", "10K", "50K"].map((amount, index) => (
              <button
                key={index}
                className="bg-gray-100 hover:bg-gray-200 rounded-xl py-4 text-sm font-medium text-gray-700 transition-all min-h-[48px] flex items-center justify-center"
              >
                {amount}
              </button>
            ))}
          </div>

          {/* To Account */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              To Account
            </label>
            <div className="bg-orange-50 rounded-2xl p-4 border-2 border-orange-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">Savings Account</p>
                  <p className="text-sm text-gray-600">****7471</p>
                </div>
                <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 text-sm">💰</span>
                </div>
              </div>
            </div>
          </div>

          {/* Remarks */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Note (Optional)
            </label>
            <input
              type="text"
              defaultValue="Test"
              className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl py-4 px-4 text-gray-900 focus:outline-none focus:border-orange-400 focus:bg-white transition-all min-h-[48px]"
              placeholder="Add a note..."
            />
          </div>
        </div>
      </div>

      {/* Transfer Button - Larger for Mobile */}
      <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-5 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all min-h-[56px]">
        Send Money →
      </button>
    </div>
  );
}

// Exit Dialog - Modern Modal
function ExitDialog() {
  return (
    <div className="px-4 py-8">
      {/* Section Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center bg-red-50 px-4 py-3 rounded-full">
          <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium text-red-700">
            Exit Application
          </span>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">👋</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            See you later!
          </h3>
          <p className="text-gray-600 mb-6">
            Are you sure you want to exit your banking session?
          </p>

          <div className="space-y-3">
            <button className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl font-semibold transition-all min-h-[56px]">
              Yes, Exit Securely
            </button>
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 rounded-2xl font-semibold transition-all min-h-[56px]">
              Stay Logged In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
