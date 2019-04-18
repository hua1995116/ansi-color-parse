console() {
    echo "$@" | sed \
        -e "s/\[\[\(.*\)/\1/" \
        -e "s/\(.*\)/\1@reset/" \
        -e "s/@black/$(tput setaf 0)/g" \
        -e "s/@red/$(tput setaf 1)/g" \
        -e "s/@green/$(tput setaf 2)/g" \
        -e "s/@yellow/$(tput setaf 3)/g" \
        -e "s/@blue/$(tput setaf 4)/g" \
        -e "s/@magenta/$(tput setaf 5)/g" \
        -e "s/@cyan/$(tput setaf 6)/g" \
        -e "s/@white/$(tput setaf 7)/g" \
        -e "s/@bgblack/$(tput setab 0)/g" \
        -e "s/@bgred/$(tput setab 1)/g" \
        -e "s/@bggreen/$(tput setab 2)/g" \
        -e "s/@bgyellow/$(tput setab 3)/g" \
        -e "s/@bgblue/$(tput setab 4)/g" \
        -e "s/@bgmagenta/$(tput setab 5)/g" \
        -e "s/@bgcyan/$(tput setab 6)/g" \
        -e "s/@bgwhite/$(tput setab 7)/g" \
        -e "s/@reset/$(tput sgr0)/g" \
        -e "s/@b/$(tput bold)/g" \
        -e "s/@u/$(tput sgr 0 1)/g"
}

# 示例 console @red@bgblack[[fff
