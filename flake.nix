{
  inputs.nixpkgs.url = "github:nixos/nixpkgs/nixos-25.05";

  outputs = { nixpkgs, ... }:
    let system = "x86_64-linux";
    in
      {
      devShells."${system}".default =
        let pkgs = import nixpkgs { inherit system; };
        in pkgs.mkShell
        {
          packages = with pkgs; [
            html-tidy
            nodePackages.jshint
            python312
            lynx
          ];
          shellHook = ''
            alias deploy="rsync -r --delete -e 'ssh -p 727' --chmod=-w --info=progress2 . majula:/var/www/leonardgomez.com"
            ./test.sh
          '';
        };
    };
}
