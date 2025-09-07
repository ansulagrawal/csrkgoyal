"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export function DisclaimerModal() {
  const [show, setShow] = useState(true);
  const router = useRouter();

  // Check session on mount
  useEffect(() => {
    const accepted = sessionStorage.getItem("disclaimerAccepted");
    if (accepted === "true") {
      setShow(false);
      router.push("/home");
    }
  }, [router]);

  // Lock/unlock background scroll
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  const handleAgree = () => {
    sessionStorage.setItem("disclaimerAccepted", "true");
    setShow(false);
    router.push("/home");
  };

  const handleDecline = () => {
    window.location.href = "https://google.com";
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-white rounded shadow-xl max-w-2xl w-full p-6 animate-fadeInScale">
        <h2 className="text-2xl font-bold text-center mb-4 text-slate-800">
          Disclaimer
        </h2>
        <div className="text-gray-700 space-y-4 text-sm leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
          <p>
            As per The Chartered Accountants Act, 1949, we are not permitted to
            solicit work or advertise for our services. The user acknowledges
            the following:
          </p>
          <p>
            There has been no advertisement, personal communication,
            solicitation, invitation or inducement of any kind whatsoever from
            us or any of our members to solicit any work through this website.
          </p>
          <p>
            The user wishes to gain more information about us for his/her own
            information and use.
          </p>
          <p>
            We are not liable to any consequence of any action taken by the user
            relying on the material/information provided on this website.
          </p>
          <p>
            The information provided under this website is solely available at
            your request for informational purposes only, should not be
            interpreted as soliciting or advisement nor does such information
            constitute legal advice.
          </p>
          <p>
            The information about us is provided to the user only on his/her
            specific request. Any information obtained or material downloaded
            from this website is completely at the user’s volition and any
            transmission, receipt or use of this site would not create any form
            of relationship between us.
          </p>
          <p>
            In cases where the user has any legal issues, he/she in all cases
            must seek independent legal advice.
          </p>
        </div>
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={handleDecline}
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
          >
            Decline
          </button>
          <button
            onClick={handleAgree}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Agree
          </button>
        </div>
      </div>
    </div>
  );
}
