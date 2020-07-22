import React from "react";
import ContentLoader from "react-content-loader";
import Paper from "../ui/Paper/Paper";

function MiniProfileLoader(props) {
  return (
    <Paper noPadding>
      <ContentLoader
        speed={2}
        width={255}
        height={400}
        viewBox="0 0 255 400"
        backgroundColor="#f6f4f4"
        foregroundColor="#f0f0f0"
        {...props}
      >
        <rect x="3" y="4" rx="0" ry="0" width="255" height="72" />
        <rect x="50" y="141" rx="0" ry="0" width="157" height="8" />
        <circle cx="129" cy="78" r="40" />
        <rect x="47" y="164" rx="0" ry="0" width="156" height="9" />
        <rect x="69" y="188" rx="0" ry="0" width="121" height="6" />
      </ContentLoader>
    </Paper>
  );
}

export default MiniProfileLoader;
