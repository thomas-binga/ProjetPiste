package com.progrep.piste.model;

import jdk.jshell.execution.Util;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class UserWithMissionId {
    private Utilisateur utilisateur;
    private List<Integer> missionIdList;
}
