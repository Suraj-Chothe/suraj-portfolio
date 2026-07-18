import * as Icons from "lucide-react";

export default function SocialLinks() {
  console.log(
    "Git Icons:",
    Object.keys(Icons).filter((icon) =>
      icon.toLowerCase().includes("git")
    )
  );

  console.log(
    "LinkedIn Icons:",
    Object.keys(Icons).filter((icon) =>
      icon.toLowerCase().includes("linkedin")
    )
  );

  return <div>Check the browser console.</div>;
}