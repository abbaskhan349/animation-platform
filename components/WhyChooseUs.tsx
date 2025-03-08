import { FileText, HardDrive, HardDriveUpload, MessageSquareMore, Mouse, ShieldCheck, Zap } from 'lucide-react'
import React from 'react'

function WhyChooseUs() {
  return (
    <div>
        <div className=" h-[440px] p-10 bg-gradient-to-r from-[#0c0b13]/90 to-[#0b0f14]/90 rounded-[14px] border border-white/20 backdrop-blur-lg inline-flex flex-col justify-start items-st gap-10 overflow-hidden">
  <div className="w-[1080px inline-flex justify-center items-center gap-7">
    <div className="w-[341.33px h-40 flex justify-between items-center overflow-hidden">
      <div className="w-[259px] inline-flex flex-col justify-start items-center gap-4">
        <div className=" relative shadow-[0px_4px_32px_0px_rgba(255,255,255,.4)] bg-[rgba(255,255,255,.1)]" >
            <Mouse />
        </div>

        <div className="self-stretch h-[71px] flex flex-col justify-start items-center gap-3">
          <div className="relative text-center justify-end text-white text-xl font-bold font-['Satoshi']">Intuitive User Experience</div>
          <div className="relative text-center justify-start text-[#bdbdbd] text-xs font-normal font-['Satoshi'] leading-none">Start a quick with a user-friendly interface designed for maximum easy and efficiency.</div>
        </div>
      </div>
    </div>
    <div className="w-[341.33px h-40 flex justify-between items-center overflow-hidden">
      <div className="w-[259px] inline-flex flex-col justify-start items-center gap-4">
      <div className=" relative shadow-[0px_4px_32px_0px_rgba(255,255,255,.4)] bg-[rgba(255,255,255,.1)]" >
            <Zap />
        </div>
        <div className="self-stretch h-[71px] flex flex-col justify-start items-center gap-3">
          <div className="relative text-center justify-end text-white text-xl font-bold font-['Satoshi']">Boost Productivity</div>
          <div className="relative text-center justify-start text-[#bdbdbd] text-xs font-normal font-['Satoshi'] leading-none">Use pre-default transitions to save time and productivity.</div>
        </div>
      </div>
    </div>
    <div className="w-[341.33px] h-40 flex justify-between items-center overflow-hidden">
      <div className="grow shrink basis-0 self-stretch inline-flex flex-col justify-center items-center gap-4">
      <div className=" relative shadow-[0px_4px_32px_0px_rgba(255,255,255,.4)] bg-[rgba(255,255,255,.1)]" >
            <FileText />
        </div>
        <div className="self-stretch h-[71px] flex flex-col justify-start items-center gap-3">
          <div className="relative text-center justify-end text-white text-xl font-bold font-['Satoshi']">Customizable Templates</div>
          <div className="w-[247px] relative text-center justify-start text-[#bdbdbd] text-xs font-normal font-['Satoshi'] leading-none">Get ready made customizable templates for your projects.</div>
        </div>
      </div>
    </div>
  </div>
  <div className="w-[1080px inline-flex justify-center items-center gap-7">
    <div className="w-[341.33px h-40 flex justify-between items-center overflow-hidden">
      <div className="w-[259px] inline-flex flex-col justify-start items-center gap-4">
      <div className=" relative shadow-[0px_4px_32px_0px_rgba(255,255,255,.4)] bg-[rgba(255,255,255,.1)]" >
            <MessageSquareMore />
        </div>
        <div className="self-stretch h-[71px] flex flex-col justify-start items-center gap-3">
          <div className="relative text-center justify-end text-white text-xl font-bold font-['Satoshi']">Intuitive User Experience</div>
          <div className="relative text-center justify-start text-[#bdbdbd] text-xs font-normal font-['Satoshi'] leading-none">Start a quick with a user-friendly interface designed for maximum easy and efficiency.</div>
        </div>
      </div>
    </div>
    <div className="w-[341.33px h-40 flex justify-between items-center overflow-hidden">
      <div className="w-[259px] inline-flex flex-col justify-start items-center gap-4">
      <div className=" relative shadow-[0px_4px_32px_0px_rgba(255,255,255,.4)] bg-[rgba(255,255,255,.1)]" >
            <ShieldCheck />
        </div>
        <div className="self-stretch h-[71px] flex flex-col justify-start items-center gap-3">
          <div className="relative text-center justify-end text-white text-xl font-bold font-['Satoshi']">Boost Productivity</div>
          <div className="relative text-center justify-start text-[#bdbdbd] text-xs font-normal font-['Satoshi'] leading-none">Use pre-default transitions to save time and productivity.</div>
        </div>
      </div>
    </div>
    <div className="w-[341.33px] h-40 flex justify-between items-center overflow-hidden">
      <div className="grow shrink basis-0 self-stretch inline-flex flex-col justify-center items-center gap-4">
        <div className="w-[22.22px] h-[24.55px] relative">
        <div className=" relative shadow-[0px_4px_32px_0px_rgba(255,255,255,.4)] bg-[rgba(255,255,255,.1)]" >
            <HardDriveUpload />
        </div>
        </div>
        <div className="self-stretch h-[71px] flex flex-col justify-start items-center gap-3">
          <div className="relative text-center justify-end text-white text-xl font-bold font-['Satoshi']">Customizable Templates</div>
          <div className="w-[247px] relative text-center justify-start text-[#bdbdbd] text-xs font-normal font-['Satoshi'] leading-none">Get ready made customizable templates for your projects.</div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default WhyChooseUs
