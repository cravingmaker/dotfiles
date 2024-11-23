# Alias
## Directories
alias -g ,="clear"
alias -g ..="cd .."
alias -g ...="cd ../.."
alias -g ....="cd ../../.."

## Edit Dotfiles
alias -g .zh="vim ~/.zsh_history"
alias -g .zp="vim ~/.zprofile"
alias -g .zc="vim ~/.zshrc"
alias -g .gc="vim ~/.gitconfig"

## Homebrew
alias brewu="brew cu --all --yes && brew update && brew upgrade && brew cleanup && brew autoremove"
alias brewd="brew bundle dump --file=Brewfile --force"

## Pnpm
alias pn="pnpm"
alias pnx="pnpm dlx"
alias pnr="pnpm run"
alias pnl="pnpm list"
alias pnlg="pnpm list -g"
alias pna="pnpm add"
alias pnd="pnpm add -D"
alias pno="pnpm outdated"
alias pnu="pnpm update"
alias pnul="pnpm update --latest"
alias pnrm="pnpm rm"
alias pni="pnpm install"
alias pnif="pnpm install --fix-peer-dependencies"
alias pnc="rm -rf node_modules pnpm-lock.yaml && pnpm install"
alias pncc="pnpm store prune && pnpm cache clean --all"

## Others
alias copytree="tree -f -L 5 | pbcopy"

# Miscellaneous
## Fnm
eval "$(fnm env --use-on-cd)"

## THIS MUST BE AT THE END OF THE FILE FOR SDKMAN TO WORK!!!
export SDKMAN_DIR="$HOME/.sdkman"
[[ -s "$HOME/.sdkman/bin/sdkman-init.sh" ]] && source "$HOME/.sdkman/bin/sdkman-init.sh"
