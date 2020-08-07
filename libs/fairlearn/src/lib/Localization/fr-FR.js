module.exports = {
    loremIpsum:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    defaultClassNames: "Classe {0}",
    defaultFeatureNames: "Caractéristique sensible {0}",
    defaultSingleFeatureName: "Caractéristique sensible",
    defaultCustomMetricName: "Métrique personnalisée {0}",
    accuracyTab: "Équité dans les performances",
    opportunityTab: "Équité dans l'opportunité",
    modelComparisonTab: "Comparaison de modèles",
    tableTab: "Vue Détails",
    dataSpecifications: "Statistiques des données",
    attributes: "Attributs",
    singleAttributeCount: "1 caractéristique sensible",
    attributesCount: "{0} caractéristiques sensibles",
    instanceCount: "{0} instances",
    close: "Fermer",
    calculating: "Calcul...",
    accuracyMetric: "Métrique de performances",
    errorOnInputs:
        "Erreur d'entrée. Les caractéristiques sensibles doivent être des valeurs catégoriques pour l'instant. Mappez les valeurs à des catégories classées et réessayez.",
    Accuracy: {
        header: "Comment voulez-vous mesurer les performances ?",
        modelMakes: "votre modèle fait",
        modelsMake: "vos modèles font",
        body:
            "Vos données contiennent des étiquettes de type « {0} » et {2} {1} prédictions. D'après ces informations, nous vous recommandons d'utiliser les métriques suivantes. Sélectionnez une métrique dans la liste.",
        binaryClassifier: "classifieur binaire",
        probabalisticRegressor: "régresseur probit",
        regressor: "régresseur",
        binary: "binaire",
        continuous: "continu",
    },
    Parity: {
        header: "Équité mesurée en termes de disparité",
        body:
            "Les métriques de disparité quantifient la variation du comportement de votre modèle sur les caractéristiques sélectionnées. Il existe deux types de métriques de disparité : d'autres sont à venir...",
    },
    Header: {
        title: "Fairlearn",
        documentation: "Documentation",
    },
    Footer: {
        back: "Précédent",
        next: "Suivant",
    },
    Intro: {
        welcome: "Bienvenue dans :",
        fairlearnDashboard: "Tableau de bord Fairlearn",
        introBody:
            "Le tableau de bord Fairlearn vous permet d'évaluer les compromis entre les performances et l'équité de vos modèles",
        explanatoryStep:
            "Pour configurer l'évaluation, vous devez spécifier une caractéristique sensible et une métrique de performances.",
        getStarted: "Démarrer",
        features: "Caractéristiques sensibles",
        featuresInfo:
            "Les caractéristiques sensibles permettent de diviser vos données en groupes. L'équité de votre modèle dans ces groupes est évaluée par des métriques de disparité qui quantifient la variation du comportement de votre modèle dans ces groupes.",
        accuracy: "Métrique de performances",
        accuracyInfo:
            "Les métriques de performances permettent d'évaluer la qualité globale de votre modèle ainsi que la qualité de votre modèle dans chaque groupe. La disparité des performances signalée est la différence entre les valeurs extrêmes de la métrique de performances dans les groupes.",
    },
    ModelComparison: {
        title: "Comparaison de modèles",
        howToRead: "Comment lire ce graphique",
        lower: "inférieure",
        higher: "supérieure",
        howToReadText:
            "Ce graphique représente chacun des modèles {0} sous la forme d'un point sélectionnable. L'axe X représente {1} (une valeur {2} étant meilleure). L'axe Y représente la disparité (une valeur inférieure étant meilleure).",
        insights: "Insights",
        insightsText1: "Le graphique montre {0} et la disparité de {1} modèles.",
        insightsText2: "{0} est compris entre {1} et {2}. Les plages de disparité vont de {3} à {4}.",
        insightsText3: "Le modèle le plus juste obtient {0} sur {1} et une disparité de {2}.",
        insightsText4: "Le modèle de disparité le plus faible obtient {0} sur {1} et une disparité de {2}.",
        disparityInOutcomes: "Disparité dans les prédictions",
        disparityInAccuracy: "Disparité dans {0}",
        howToMeasureDisparity: "Comment la disparité doit-elle être mesurée ?",
    },
    Report: {
        modelName: "Modèle {0}",
        title: "Disparité des performances",
        globalAccuracyText: "Est le {0} d'ensemble",
        accuracyDisparityText: "Est la disparité dans {0}",
        editConfiguration: "Modifier la configuration",
        backToComparisons: "Vue multimodèle",
        outcomesTitle: "Disparité dans les prédictions",
        minTag: "Min",
        maxTag: "Max",
        groupLabel: "Sous-groupe",
        underestimationError: "Sous-prédiction",
        underpredictionExplanation: "(prédit = 0, true = 1)",
        overpredictionExplanation: "(prédit = 1, true = 0)",
        overestimationError: "Surprédiction",
        classificationOutcomesHowToRead:
            "Le graphique à barres montre le taux de sélection dans chaque groupe, c'est-à-dire la fraction des points classifiés comme ayant la valeur 1.",
        regressionOutcomesHowToRead:
            "Les diagrammes à surfaces montrent la répartition des prédictions dans chaque groupe. Les points de données individuels sont superposés.",
        classificationAccuracyHowToRead1: "Le graphique à barres montre la répartition des erreurs dans chaque groupe.",
        classificationAccuracyHowToRead2:
            "Les erreurs sont divisées en erreurs de surprédiction (prédire 1 quand l'étiquette true est 0) et en erreurs de sous-prédiction (prédire 0 quand l'étiquette true est 1).",
        classificationAccuracyHowToRead3:
            "Les taux signalés sont obtenus en divisant le nombre d'erreurs par la taille totale du groupe.",
        probabilityAccuracyHowToRead1:
            "Le graphique à barres montre l'erreur absolue moyenne dans chaque groupe, divisée en surprédiction et en sous-prédiction.",
        probabilityAccuracyHowToRead2:
            "Dans chaque exemple, nous mesurons la différence entre la prédiction et l'étiquette. Si elle est positive, nous parlons de surprédiction ; si elle est négative, nous parlons de sous-prédiction.",
        probabilityAccuracyHowToRead3:
            "Nous signalons la somme des erreurs de surprédiction et la somme des erreurs de sous-prédiction divisée par la taille totale du groupe.",
        regressionAccuracyHowToRead:
            "L'erreur est la différence entre la prédiction et l'étiquette. Les diagrammes à surfaces montrent la répartition des erreurs dans chaque groupe. Les points de données individuels sont superposés.",
        distributionOfPredictions: "Répartition des prédictions",
        distributionOfErrors: "Distribution des erreurs",
        tooltipPrediction: "Prédiction : {0}",
        tooltipError: "Erreur : {0}",
    },
    Feature: {
        header: "Selon quelles caractéristiques souhaitez-vous évaluer l'équité de votre modèle ?",
        body:
            "L'équité est évaluée en termes de disparités dans le comportement de votre modèle. Nous allons diviser vos données en fonction des valeurs de chaque caractéristique sélectionnée, puis évaluer la manière dont la métrique et les prédictions de performance de votre modèle diffèrent dans ces divisions.",
        learnMore: "En savoir plus",
        summaryCategoricalCount: "Cette caractéristique a {0} valeurs uniques",
        summaryNumericCount:
            "Cette caractéristique numérique, comprise entre {0} et {1}, est regroupée en {2} classes.",
        showCategories: "Tout afficher",
        hideCategories: "Réduire",
        categoriesOverflow: "   et {0} catégories supplémentaires",
        editBinning: "Modifier les groupes",
        subgroups: "Sous-groupes",
    },
    Metrics: {
        accuracyScore: "Justesse",
        precisionScore: "Précision",
        recallScore: "Rappeler",
        zeroOneLoss: "Perte zéro-un",
        specificityScore: "Score de spécificité",
        missRate: "Taux d'échec",
        falloutRate: "Taux de faux positifs",
        maxError: "Erreur max.",
        meanAbsoluteError: "Erreur absolue moyenne",
        meanSquaredError: " MSE (erreur quadratique moyenne)",
        meanSquaredLogError: "Erreur logarithmique quadratique moyenne",
        medianAbsoluteError: "Erreur absolue médiane",
        average: "Prédiction moyenne",
        selectionRate: "Taux de sélection",
        overprediction: "Surprédiction",
        underprediction: "Sous-prédiction",
        r2_score: "Score du coefficient de détermination",
        rms_error: "RMSE (racine de l'erreur quadratique moyenne)",
        auc: "Zone sous la courbe ROC",
        balancedRootMeanSquaredError: "RMSE équilibrée",
        balancedAccuracy: "Justesse équilibrée",
        f1Score: "F1-Score",
        logLoss: "Log Loss",
        accuracyDescription: "Fraction des points de données correctement classifiés.",
        precisionDescription:
            "Fraction de points de données correctement classifiés parmi ceux classifiés comme ayant la valeur 1.",
        recallDescription:
            "Fraction des points de données correctement classifiés parmi ceux dont l'étiquette true est 1. Autres noms : taux de vrais positifs, sensibilité.",
        rmseDescription: "Racine carrée de la moyenne des erreurs quadratiques.",
        mseDescription: "Moyenne des erreurs quadratiques.",
        meanAbsoluteErrorDescription:
            "Moyenne des valeurs absolues des erreurs. Résiste mieux aux valeurs hors norme que MSE.",
        r2Description: "Fraction de variance dans les étiquettes expliquée par le modèle.",
        aucDescription:
            "Qualité des prédictions, présentées sous forme de scores, pour séparer les exemples positifs des exemples négatifs.",
        balancedRMSEDescription:
            "Les exemples positifs et négatifs sont repondérés pour avoir un poids total égal. Convient si les données sous-jacentes sont fortement déséquilibrées.",
        balancedAccuracyDescription:
            "Les exemples positifs et négatifs sont repondérés pour avoir un poids total égal. Convient si les données sous-jacentes sont fortement déséquilibrées.",
        f1ScoreDescription: "F1-Score is the harmonic mean of precision and recall.",
    },
    BinDialog: {
        header: "Configurer les classes",
        makeCategorical: "Considérer comme catégorique",
        save: "Enregistrer",
        cancel: "Annuler",
        numberOfBins: "Nombre de classes :",
        categoryHeader: "Valeurs de classe :",
    },
};