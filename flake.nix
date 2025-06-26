
{
  description = "Next.js + Bun Dev Environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.05";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in {
        devShell = pkgs.mkShell {
          name = "nextjs-with-bun";

          buildInputs = [
            pkgs.nodejs_20   # Needed for Next.js dev server
            pkgs.bun         # For dependency management and scripts
            pkgs.git
          ];

          shellHook = ''
            export NODE_ENV=development
            echo "✅ Ready to use Next.js with Bun"
            echo "👉 Run: bun install && bun run dev"
          '';
        };
      });
}

