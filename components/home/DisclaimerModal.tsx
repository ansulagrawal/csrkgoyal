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
          DISCLAIMER
        </h2>
        <div className="text-gray-700 space-y-4 text-sm leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
          <p>
            As per the provisions of the Company Secretaries Act, 1980 and the
            guidelines issued by the Institute of Company Secretaries of India
            (ICSI), we are not permitted to advertise or solicit work in any
            form, whether directly or indirectly.
          </p>

          <p>
            By accessing this website, you acknowledge and agree to the
            following:
          </p>

          <p>
            <strong>No Advertisement or Solicitation</strong><br />
            This website is not intended to be, and must not be interpreted as,
            an advertisement or solicitation of professional services. There has
            been no invitation or inducement of any sort from us or any of our
            members to solicit any work through this website.
          </p>

          <p>
            <strong>User-Initiated Access</strong><br />
            The information available on this website is solely for
            informational purposes and has been provided at your own request.
            You wish to gain more knowledge about the professional profile and
            services offered by the Practicing Company Secretary voluntarily.
          </p>

          <p>
            <strong>No Professional Relationship</strong><br />
            Merely accessing this website, downloading information, or
            communicating with us through this website does not create a
            professional or contractual relationship between the user and the
            Practicing Company Secretary.
          </p>

          <p>
            <strong>No Legal Advice</strong><br />
            The contents of this website should not be construed as legal
            advice. Users are advised to seek appropriate and independent legal
            or professional advice before acting upon any information provided
            herein.
          </p>

          <p>
            <strong>Limitation of Liability</strong><br />
            We shall not be responsible for any loss or damage caused to any
            person relying on the material/information provided on this website.
            Any reliance placed on such information is strictly at the user's
            own risk.
          </p>

          <p>
            <strong>Compliance with ICSI Guidelines</strong><br />
            This website is intended to comply with the guidelines for websites
            issued by the ICSI and is restricted to providing only basic
            information about the Practicing Company Secretary, his/her
            qualifications, and services in a manner permitted under the
            applicable regulations.
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
