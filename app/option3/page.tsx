"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Option3() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full max-w-sm mx-auto bg-white min-h-screen shadow-lg relative overflow-hidden">
        <div className="bg-white border-b border-gray-200 px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
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

            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="List Software"
                width={20}
                height={20}
                className="rounded"
              />
              <span className="font-semibold text-gray-800 text-sm">
                List Banking
              </span>
            </div>

            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-gray-500">Live</span>
            </div>
          </div>
        </div>

        <div className="bg-white border-b border-gray-100 px-4">
          <div className="flex space-x-1">
            {[
              { id: "dashboard", label: "Dashboard", icon: "🏠" },
              { id: "accounts", label: "Accounts", icon: "💳" },
              { id: "transfer", label: "Transfer", icon: "💸" },
              { id: "services", label: "Services", icon: "⚙️" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex flex-col items-center py-3 px-2 text-xs font-medium transition-colors ${
                  activeTab === tab.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <span className="text-lg mb-1">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
          {activeTab === "dashboard" && <DashboardView />}
          {activeTab === "accounts" && <AccountsView />}
          {activeTab === "transfer" && <TransferView />}
          {activeTab === "services" && <ServicesView />}
        </div>
      </div>
    </div>
  );
}

function DashboardView() {
  return (
    <div className="h-full overflow-y-auto bg-gray-50 hide-scrollbar">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-blue-100 text-sm">Welcome back,</p>
            <h2 className="text-xl font-bold">Sanjeev Kumar</h2>
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">SK</span>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-blue-100 text-sm">Total Balance</p>
          <h1 className="text-2xl font-bold">₹86.3 Crores</h1>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div>
          <h3 className="text-gray-800 font-semibold mb-3">Account Overview</h3>
          <div className="flex space-x-3 overflow-x-auto pb-2 hide-scrollbar">
            <div className="flex-shrink-0 w-32">
              <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white text-sm">💰</span>
                </div>
                <p className="text-green-700 font-bold text-sm">₹61.6 Cr</p>
                <p className="text-green-600 text-xs">Savings</p>
              </div>
            </div>
            <div className="flex-shrink-0 w-32">
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-3">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white text-sm">📈</span>
                </div>
                <p className="text-purple-700 font-bold text-sm">₹24.7 Cr</p>
                <p className="text-purple-600 text-xs">Investments</p>
              </div>
            </div>
            <div className="flex-shrink-0 w-32">
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-3">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white text-sm">🏦</span>
                </div>
                <p className="text-orange-700 font-bold text-sm">₹0</p>
                <p className="text-orange-600 text-xs">Due</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-gray-800 font-semibold mb-3">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-white border border-gray-200 rounded-xl p-4 flex items-center space-x-3 hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600">💸</span>
              </div>
              <div className="text-left">
                <p className="text-gray-800 font-medium text-sm">Send Money</p>
                <p className="text-gray-500 text-xs">Transfer funds</p>
              </div>
            </button>
            <button className="bg-white border border-gray-200 rounded-xl p-4 flex items-center space-x-3 hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600">💰</span>
              </div>
              <div className="text-left">
                <p className="text-gray-800 font-medium text-sm">Add Money</p>
                <p className="text-gray-500 text-xs">Top up account</p>
              </div>
            </button>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-gray-800 font-semibold">Recent Activity</h3>
            <button className="text-blue-600 text-sm">View All</button>
          </div>
          <div className="space-y-3">
            {[
              {
                type: "Fund Transfer",
                amount: "-₹50,000",
                time: "2h ago",
                color: "red",
              },
              {
                type: "Cashback Credit",
                amount: "+₹1,250",
                time: "1d ago",
                color: "green",
              },
              {
                type: "Investment SIP",
                amount: "-₹25,000",
                time: "3d ago",
                color: "blue",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-3"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-800 font-medium text-sm">
                      {activity.type}
                    </p>
                    <p className="text-gray-500 text-xs">{activity.time}</p>
                  </div>
                  <span
                    className={`font-bold text-sm ${
                      activity.color === "green"
                        ? "text-green-600"
                        : activity.color === "red"
                        ? "text-red-600"
                        : "text-blue-600"
                    }`}
                  >
                    {activity.amount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-gray-800 font-semibold mb-3">
            Portfolio Performance
          </h3>
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-500 text-sm">Monthly Growth</p>
                <p className="text-2xl font-bold text-gray-800">+12.5%</p>
              </div>
              <div className="text-3xl">📊</div>
            </div>
            {/* Simple Progress Bars */}
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-600">Savings</span>
                  <span className="text-gray-800">71%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: "71%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-600">Investments</span>
                  <span className="text-gray-800">29%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full"
                    style={{ width: "29%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Accounts View - List Based Layout
function AccountsView() {
  return (
    <div className="h-full overflow-y-auto bg-gray-50 p-4 hide-scrollbar">
      <div className="space-y-4">
        {/* Primary Account */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between mb-3">
            <span className="text-blue-100 text-sm">Primary Savings</span>
            <span className="text-blue-100 text-sm">****7471</span>
          </div>
          <div>
            <p className="text-blue-100 text-sm">Available Balance</p>
            <h2 className="text-2xl font-bold">₹61,60,00,000</h2>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-blue-100 text-xs">List Software Bank</span>
            <div className="flex space-x-2">
              <button className="bg-white/20 px-3 py-1 rounded-full text-xs">
                View
              </button>
              <button className="bg-white/20 px-3 py-1 rounded-full text-xs">
                Transfer
              </button>
            </div>
          </div>
        </div>

        {/* Investment Accounts */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-3">
            Investment Accounts
          </h3>
          <div className="space-y-3">
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600">💎</span>
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">Premium FD</p>
                    <p className="text-gray-500 text-sm">Matures Mar 2025</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-800 font-bold">₹5.5 Cr</p>
                  <p className="text-green-600 text-sm">+6.5%</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600">🌱</span>
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">Growth SIP</p>
                    <p className="text-gray-500 text-sm">Monthly SIP</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-800 font-bold">₹2.1 Cr</p>
                  <p className="text-green-600 text-sm">+12.3%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Account */}
        <button className="w-full bg-white border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:border-blue-400 hover:bg-blue-50 transition-colors">
          <div className="text-gray-400 text-2xl mb-2">+</div>
          <p className="text-gray-600 font-medium">Add New Account</p>
          <p className="text-gray-500 text-sm">Link external accounts</p>
        </button>
      </div>
    </div>
  );
}

// Transfer View - Step by Step Layout
function TransferView() {
  const [step, setStep] = useState(1);

  return (
    <div className="h-full overflow-y-auto bg-gray-50 hide-scrollbar">
      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          {[1, 2, 3].map((stepNum) => (
            <div key={stepNum} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  step >= stepNum
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {stepNum}
              </div>
              {stepNum < 3 && (
                <div
                  className={`w-16 h-1 mx-2 ${
                    step > stepNum ? "bg-blue-600" : "bg-gray-200"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>Amount</span>
          <span>Recipient</span>
          <span>Confirm</span>
        </div>
      </div>

      <div className="p-4">
        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-gray-800 font-bold text-lg mb-2">
                Enter Amount
              </h3>
              <p className="text-gray-500 text-sm">
                How much do you want to send?
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <span className="text-gray-500 text-3xl">₹</span>
              <input
                type="number"
                defaultValue="10000"
                className="text-4xl font-bold text-gray-800 bg-transparent text-center w-full focus:outline-none"
              />
              <p className="text-gray-500 text-sm mt-2">Indian Rupees</p>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {["1K", "5K", "10K", "50K"].map((amount, index) => (
                <button
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg py-3 text-sm font-medium hover:bg-blue-50 hover:border-blue-300 transition-colors"
                >
                  ₹{amount}
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors"
            >
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-gray-800 font-bold text-lg mb-2">
                Select Recipient
              </h3>
              <p className="text-gray-500 text-sm">
                Who do you want to send money to?
              </p>
            </div>

            <div className="space-y-3">
              {[
                { name: "John Smith", bank: "Same Bank", avatar: "JS" },
                { name: "Sarah Wilson", bank: "HDFC Bank", avatar: "SW" },
                { name: "Mike Johnson", bank: "ICICI Bank", avatar: "MJ" },
              ].map((contact, index) => (
                <button
                  key={index}
                  className="w-full bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">
                        {contact.avatar}
                      </span>
                    </div>
                    <div className="text-left">
                      <p className="text-gray-800 font-medium">
                        {contact.name}
                      </p>
                      <p className="text-gray-500 text-sm">{contact.bank}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <button className="w-full bg-white border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:border-blue-400 hover:bg-blue-50 transition-colors">
              <span className="text-gray-500 text-2xl">+</span>
              <p className="text-gray-600 font-medium mt-1">
                Add New Recipient
              </p>
            </button>

            <div className="flex space-x-3">
              <button
                onClick={() => setStep(1)}
                className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-xl font-bold hover:bg-gray-300 transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-gray-800 font-bold text-lg mb-2">
                Confirm Transfer
              </h3>
              <p className="text-gray-500 text-sm">
                Review your transaction details
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-500">Amount</span>
                <span className="font-bold text-gray-800">₹10,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">To</span>
                <span className="font-bold text-gray-800">John Smith</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">From</span>
                <span className="font-bold text-gray-800">Primary Savings</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Fee</span>
                <span className="font-bold text-green-600">FREE</span>
              </div>
              <hr className="border-gray-200" />
              <div className="flex justify-between">
                <span className="text-gray-800 font-bold">Total</span>
                <span className="font-bold text-gray-800">₹10,000</span>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setStep(2)}
                className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-xl font-bold hover:bg-gray-300 transition-colors"
              >
                Back
              </button>
              <button className="flex-1 bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition-colors">
                Send Money
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Services View - Grid with Categories
function ServicesView() {
  const services = [
    {
      icon: "💰",
      name: "Demand Deposit",
      desc: "Instant deposits",
      category: "Deposits",
    },
    {
      icon: "⏰",
      name: "Term Deposit",
      desc: "Fixed deposits",
      category: "Deposits",
    },
    {
      icon: "💳",
      name: "Loan/Advances",
      desc: "Credit facility",
      category: "Loans",
    },
    {
      icon: "🚀",
      name: "Fund Transfer",
      desc: "Send money",
      category: "Payments",
    },
    {
      icon: "👥",
      name: "Manage Beneficiary",
      desc: "Manage contacts",
      category: "Payments",
    },
    {
      icon: "📊",
      name: "Mini Statement",
      desc: "Quick view",
      category: "Statements",
    },
    {
      icon: "📋",
      name: "Cheque Related",
      desc: "Cheque services",
      category: "Statements",
    },
    {
      icon: "⚙️",
      name: "Other Services",
      desc: "More options",
      category: "Others",
    },
    {
      icon: "🏧",
      name: "ATM Related",
      desc: "ATM services",
      category: "Others",
    },
  ];

  const categories = [
    "All",
    "Deposits",
    "Loans",
    "Payments",
    "Statements",
    "Others",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <div className="h-full overflow-y-auto bg-gray-50 hide-scrollbar">
      {/* Category Filter */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex space-x-2 overflow-x-auto hide-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-3">
          {filteredServices.map((service, index) => (
            <button
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <p className="text-gray-800 font-medium text-sm mb-1">
                  {service.name}
                </p>
                <p className="text-gray-500 text-xs">{service.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
