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
alias pna="pnpm add"
alias pnu="pnpm update"
alias pnr="pnpm rm"
alias pni="pnpm install"

## Others
alias copytree="tree -f -L 5 | pbcopy"

# Miscellaneous
## Fnm
eval "$(fnm env --use-on-cd)"

## THIS MUST BE AT THE END OF THE FILE FOR SDKMAN TO WORK!!!
export SDKMAN_DIR="$HOME/.sdkman"
[[ -s "$HOME/.sdkman/bin/sdkman-init.sh" ]] && source "$HOME/.sdkman/bin/sdkman-init.sh"
